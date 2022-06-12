# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється: 
- SQL-скрипт для створення на початкового наповнення бази даних
- RESTfull сервіс для управління даними

## SQL-скрипт для створення на початкового наповнення бази даних 

#### SQL-скрипт для створення бази даних
```
-- -----------------------------------------------------
-- Schema ProjectControlSystem
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `ProjectControlSystem` ;
CREATE SCHEMA IF NOT EXISTS `ProjectControlSystem` DEFAULT CHARACTER SET utf8;
USE `ProjectControlSystem` ;
-- -----------------------------------------------------
-- Table `ProjectControlSystem`.`projects`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ProjectControlSystem`.`projects` ;
CREATE TABLE IF NOT EXISTS `ProjectControlSystem`.`projects` (
`id` INT NOT NULL AUTO_INCREMENT,
`name` VARCHAR(45) NULL,
`description` VARCHAR(255) NULL,
PRIMARY KEY (`id`),
UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `ProjectControlSystem`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ProjectControlSystem`.`users`;
CREATE TABLE IF NOT EXISTS `ProjectControlSystem`.`users` (
`id` INT NOT NULL AUTO_INCREMENT,
`email` VARCHAR(255) NOT NULL,
`password` VARCHAR(255) NULL,
`name` VARCHAR(100) NULL,
PRIMARY KEY(`id`),
UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `ProjectControlSystem`.`roles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ProjectControlSystem`.`roles`;
CREATE TABLE IF NOT EXISTS `ProjectControlSystem`.`roles` (
`id` INT NOT NULL AUTO_INCREMENT,
`project_id` INT NOT NULL,
`user_id` INT NOT NULL,
`role` ENUM("Project Manager", "Teamlead", "Developer"),
PRIMARY KEY(`id`),
UNIQUE INDEX `id_UNIQUE` (`id` ASC),
CONSTRAINT `c_role_project`
FOREIGN KEY (`project_id`)
REFERENCES `ProjectControlSystem`.`projects` (`id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION,
CONSTRAINT `c_role_users`
FOREIGN KEY (`user_id`)
REFERENCES `ProjectControlSystem`.`users` (`id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `ProjectControlSystem`.`tasks`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ProjectControlSystem`.`tasks`;
CREATE TABLE IF NOT EXISTS `ProjectControlSystem`.`tasks` (
`id` INT NOT NULL AUTO_INCREMENT,
`project_id` INT NOT NULL,
`user_id` INT NULL,
`name` VARCHAR(100) NULL,
`description` VARCHAR(255) NULL,
`deadline` DATETIME NULL,
`dependence` INT NOT NULL,
`status` ENUM("TO DO", "IN PROGRESS", "RESOLVED", "DONE") NULL,
PRIMARY KEY (`id`, `dependence`),
UNIQUE INDEX `id_UNIQUE` (`id` ASC),
CONSTRAINT `c_tasks_projects`
FOREIGN KEY (`project_id`)
REFERENCES `ProjectControlSystem`.`projects` (`id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION,
CONSTRAINT `c_tasks_dependency`
FOREIGN KEY (`dependence`)
REFERENCES `ProjectControlSystem`.`tasks` (`id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION,
CONSTRAINT `c_tasks_user`
FOREIGN KEY (`user_id`)
REFERENCES `ProjectControlSystem`.`users` (`id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `ProjectControlSystem`.`actions`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ProjectControlSystem`.`actions`;
CREATE TABLE IF NOT EXISTS `ProjectControlSystem`.`actions` (
`id` INT NOT NULL AUTO_INCREMENT,
`task_id` INT NOT NULL,
`user_id` INT NOT NULL,
`acted_at` DATETIME NULL,
`previous_status` ENUM("TO DO", "IN PROGRESS", "RESOLVED", "DONE") NULL,
`current_status` ENUM("TO DO", "IN PROGRESS", "RESOLVED", "DONE", "DELETED") NULL,
PRIMARY KEY (`id`),
UNIQUE INDEX `id_UNIQUE` (`id` ASC),
CONSTRAINT `c_actions_tasks`
FOREIGN KEY (`task_id`)
REFERENCES `ProjectControlSystem`.`tasks` (`id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION,
CONSTRAINT `c_actions_users`
FOREIGN KEY(`user_id`)
REFERENCES `ProjectControlSystem`.`users` (`id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `ProjectControlSystem`.`artifacts`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ProjectControlSystem`.`artifacts`;
CREATE TABLE IF NOT EXISTS `ProjectControlSystem`.`artifacts` (
`id` INT NOT NULL AUTO_INCREMENT,
`name` VARCHAR(100) NOT NULL NULL,
`description` VARCHAR(255) NULL,
`link` VARCHAR(255) NULL,
`project_id` INT NOT NULL,
PRIMARY KEY (`id`),
UNIQUE INDEX `id_UNIQUE` (`id` ASC),
CONSTRAINT `c_artifacts_project`
FOREIGN KEY (`project_id`)
REFERENCES `ProjectControlSystem`.`projects` (`id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION)
ENGINE = InnoDB;
```

#### SQL-скрипт для початкового наповнення бази даних

```
-- SET key checks to 0 to truncate all tables
SET FOREIGN_KEY_CHECKS = 0;
-- -----------------------------------------------
-- Creating users --------------------------------
-- -----------------------------------------------
TRUNCATE users;
INSERT INTO users (email, password, name)
VALUES 
('boldak@example.mail', MD5('qwerty12345'), 'Andriy Boldak'),
('lazariev@example.mail', MD5('admin'), 'Lazariev Ivan'),
('kobilinskiy@example.mail', MD5('fyodOR'), 'Kobilinskiy Fedir'),
('naumchuk@example.mail', MD5('sany0k'), 'Naumchuk Oleksandr'),
('sadlovskiy@example.mail', MD5('password'), 'Sadlovskiy Anton'),
('kurta_semen@example.mail', MD5('s3m3nKurt4'), 'Kurta Semen'),
('radkovskiy@example.mail', MD5('YuriY'), 'Radkovskiy Yuriy'),
('bondarenko@example.mail', MD5('bond4r3nk0'), 'Bondarenko Serhiy'),
('pupkin@example.mail', MD5('pupk1n'), 'Pupkin Vladimyr'),
('shevchenko@example.mail', MD5('k0bz4r'), 'Shevchenko Taras');
-- --------------------------------------------------
-- Creating projects --------------------------------
-- --------------------------------------------------
TRUNCATE projects;
INSERT INTO projects (name, description)
VALUES
('Database project', 'Simple database learning project'),
('Github clone', 'Project for our own github clone');
-- ----------------------------------------------------------------------
-- Creating data for roles table --------------------------------
-- ----------------------------------------------------------------------
TRUNCATE roles;
INSERT INTO roles (project_id, user_id, role) 
VALUES (1, 1, 'Project Manager'), (1, 2, 'Teamlead'), (1, 3, 'Developer'),
(2, 3, 'Teamlead'), (2, 2, 'Project Manager');
INSERT INTO roles (project_id, user_id, role) 
SELECT 2, id, 'Developer' FROM users WHERE name LIKE '%e%';
-- ----------------------------------------------------
-- Creating some tasks --------------------------------
-- ----------------------------------------------------
TRUNCATE tasks;
INSERT INTO tasks (project_id, user_id, name, description, deadline, dependence, status)
VALUES
(1, (SELECT r.user_id FROM roles as r WHERE r.project_id = 1 AND r.user_id = 2),
	'Create database', 'Create SQL database', STR_TO_DATE('30-June-2022', '%d-%M-%Y'), 1, 'TO DO'),
(1, (SELECT r.user_id FROM roles as r WHERE r.project_id = 1 AND r.user_id = 4),
	'Create `users` schema', 'Create one of the SQL schemas', STR_TO_DATE('30-July-2022', '%d-%M-%Y'), 1, 'TO DO'),
(2, (SELECT r.user_id FROM roles as r WHERE r.project_id = 2 AND r.user_id = 4),
	'Research', 'Research github', STR_TO_DATE('30-June-2022', '%d-%M-%Y'), 3, 'IN PROGRESS');
-- --------------------------------------------------------
-- Creating some artifacts --------------------------------
-- --------------------------------------------------------
TRUNCATE artifacts;
INSERT INTO artifacts (name, description, link, project_id)
VALUES
(
	'Github repo',
    'Github repo for project',
    'github.com/user/repo', 
	(SELECT id FROM projects WHERE projects.id = 1)
),
(
	'Design document',
    'Design Document for project',
    'drive.com/ourproject/design-doc.pdf',
    (SELECT id FROM projects WHERE projects.id = 1)
);
-- --------------------------------------------------------
-- Creating some actions ----------------------------------
-- --------------------------------------------------------
TRUNCATE actions;
INSERT INTO actions (task_id, user_id, acted_at, previous_status, current_status)
VALUES
(
	(SELECT id FROM tasks WHERE tasks.id = 3),
    # Get user id from corresponding task from particular project.
    (SELECT roles.user_id FROM roles
	INNER JOIN tasks ON tasks.project_id = roles.project_id
	INNER JOIN users ON users.id = roles.user_id
	WHERE tasks.id = 3 AND users.id = 4),
	STR_TO_DATE('30-May-2022', '%d-%M-%Y'),
    'TO DO',
    (SELECT status FROM tasks WHERE tasks.id = 3)
);
-- SET key cheks back to 1
SET FOREIGN_KEY_CHECKS = 1;
```