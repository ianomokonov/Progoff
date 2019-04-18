CREATE TABLE IF NOT EXISTS sections (
	Id int(20) PRIMARY KEY AUTO_INCREMENT,
    Name varchar(255),
    Description varchar(255) NOT NULL,
    LongDescription text NOT NULL,
    MainImage varchar(255) NOT NULL,
    LeftImage varchar(255) NOT NULL,
    RightImage varchar(255) NOT NULL,
    Link varchar(255) NULL,
    Model varchar(255) NOT NULL,
    Logo varchar(255) NULL,
    CreateDate datetime DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS apps (
	Id int(20) PRIMARY KEY AUTO_INCREMENT,
    Name varchar(255),
    Description text NULL,
    Email varchar(255) NOT NULL,
    CreateDate datetime DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS sales (
	Id int(20) PRIMARY KEY AUTO_INCREMENT,
    Name varchar(255),
    Description text NULL,
    Image varchar(255) NOT NULL,
    Discount int(10) NOT NULL
);

CREATE TABLE IF NOT EXISTS mates (
	Id int(20) PRIMARY KEY AUTO_INCREMENT,
    Name varchar(255),
    Description text NULL,
    Position varchar(255) NOT NULL,
    VK varchar(255) NULL,
    Instagram varchar(255) NULL
);

CREATE TABLE IF NOT EXISTS jobs (
	Id int(20) PRIMARY KEY AUTO_INCREMENT,
    Name varchar(255),
    Description text NOT NULL,
    Image varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS services (
	Id int(20) PRIMARY KEY AUTO_INCREMENT,
    Name varchar(255),
    Description text NOT NULL,
    Price int(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS requirements (
	Id int(20) PRIMARY KEY AUTO_INCREMENT,
    Description text NOT NULL
);

CREATE TABLE IF NOT EXISTS attachments (
	Id int(20) NOT NULL,
    AppId int(20) NOT NULL,
    Type varchar(255) NOT NULL,
    
    CONSTRAINT aa_fk FOREIGN KEY(AppId) REFERENCES apps(Id) ON DELETE CASCADE,
    CONSTRAINT req_pk PRIMARY KEY(Id, Type) 
);

CREATE TABLE IF NOT EXISTS jobrequirement (
	RequirementId int(20) NOT NULL,
    JobId int(20) NOT NULL,
    
    CONSTRAINT reqjobs_pk PRIMARY KEY(RequirementId, JobId),
    CONSTRAINT rjreq_fk FOREIGN KEY(RequirementId) REFERENCES requirements(Id) ON DELETE CASCADE,
    CONSTRAINT rjjob_fk FOREIGN KEY(JobId) REFERENCES jobs(Id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS saleservice (
	SaleId int(20) NOT NULL,
    ServiceId int(20) NOT NULL,
    
    CONSTRAINT saleservice_pk PRIMARY KEY(SaleId, ServiceId),
    CONSTRAINT sssale_fk FOREIGN KEY(SaleId) REFERENCES sales(Id) ON DELETE CASCADE,
    CONSTRAINT ssservice_fk FOREIGN KEY(ServiceId) REFERENCES services(Id) ON DELETE CASCADE
);