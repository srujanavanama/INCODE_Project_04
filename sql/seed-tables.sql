INSERT INTO users(firstname, lastname, email, password)
	VALUES ('James', 'Bond', 'jamesbond@gmail.com', 'b6b7fb4cad4bc020f76e16889a8e9065cb708d0f8c304a8a3db609b644da9536');
INSERT INTO users(firstname, lastname, email, password)
	VALUES ('Tony', 'Stark', 'starkrulz@gmail.com', 'a836ebba36776b21dd0f5cdca497bff65c5bdfc8411cfbfe0111f27bde1c1894');
INSERT INTO users(firstname, lastname, email, password)
	VALUES ('Ali', 'G', 'nameisnotborat@gmail.com', '3b5fe14857124335bb8832cc602f8edcfa12db42be36b135bef5bca47e3f2b9c');
INSERT INTO users(firstname, lastname, email, password)
	VALUES ('Ashraf', 'Begum', 'ashraf@gmail.com', '3b5fe14857124335bb8832cc602f8edcfa12db42be36b135bef5bca47e3f2b9c');
INSERT INTO users(firstname, lastname, email, password)
	VALUES ('Sardar', 'Khan', 'sardar@gmail.com', '$2b$10$qRrez52HtNGw03PjdJkpoO5L.oTdkjU9f8dxHHJbboduSWQhFSHo.');

/*Ashraf pwd:
 Ashraf1@*/
-- Sardar pwd: Sardar1@  
/* is used for multiple lines comment and -- used for single line comment */

INSERT INTO schedules(user_id, day, start_at, end_at) 
VALUES (1, 1, '2021/06/19 12:00:00', '2021/06/19 06:00:00');
INSERT INTO schedules(user_id, day, start_at, end_at)
VALUES (1, 2, '2021/06/19 01:00:00', '2021/06/19 04:00:00');
INSERT INTO schedules(user_id, day, start_at, end_at)
VALUES (1, 3, '2021/06/19 09:00:00', '2021/06/19 05:00:00');
INSERT INTO schedules(user_id, day, start_at, end_at)
VALUES (3, 5, '2021/06/19 02:00:00', '2021/06/19 21:00:00');
INSERT INTO schedules(user_id, day, start_at, end_at)
VALUES (4, 2, '2021/06/19 06:00:00', '2021/06/19 13:00:00');
INSERT INTO schedules(user_id, day, start_at, end_at)
VALUES (5, 7, '2021/06/19 09:00:00', '2021/06/19 14:00:00');
INSERT INTO schedules(user_id, day, start_at, end_at)
VALUES (2, 6, '2021/06/19 02:00:00', '2021/06/19 09:00:00');
INSERT INTO schedules(user_id, day, start_at, end_at)
VALUES (4, 5, '2021/06/19 04:00:00', '2021/06/19 16:00:00');