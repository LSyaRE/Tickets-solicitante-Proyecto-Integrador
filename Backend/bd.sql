--TABLAS PRINCIPALES

CREATE TABLE IF NOT EXISTS public.carrera
(
    id integer NOT NULL DEFAULT nextval('carrera_id_seq'::regclass),
    nombre character varying(50) COLLATE pg_catalog."default",
    updated timestamp without time zone,
    deleted timestamp without time zone,
    enabled boolean NOT NULL,
    archived boolean NOT NULL,
    tipo_carrera character varying(50) COLLATE pg_catalog."default",
    usuario_id integer,
    CONSTRAINT id_carrera PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.carrera
    OWNER to postgres;
    


CREATE TABLE IF NOT EXISTS public.respuesta
(
    id integer NOT NULL DEFAULT nextval('respuesta_id_seq'::regclass),
    id_ticket integer NOT NULL DEFAULT nextval('respuesta_id_ticket_seq'::regclass),
    comentario character varying(250) COLLATE pg_catalog."default",
    created timestamp without time zone,
    updated timestamp without time zone,
    enabled boolean NOT NULL,
    archived boolean NOT NULL,
    resuelto boolean,
    CONSTRAINT id_respuesta PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.respuesta
    OWNER to postgres;




CREATE TABLE IF NOT EXISTS public.ticket
(
    id integer NOT NULL DEFAULT nextval('ticket_id_seq'::regclass),
    usuario_solicitante integer NOT NULL DEFAULT nextval('ticket_usuario_solicitante_seq'::regclass),
    carrera_id integer NOT NULL DEFAULT nextval('ticket_carrera_id_seq'::regclass),
    enabled boolean NOT NULL,
    updated timestamp without time zone,
    deleted timestamp without time zone,
    archived boolean,
    description character varying(200) COLLATE pg_catalog."default",
    jornada character varying(50) COLLATE pg_catalog."default",
    curso character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT id_ticket PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.ticket
    OWNER to postgres;



CREATE TABLE IF NOT EXISTS public.usuario
(
    id integer NOT NULL DEFAULT nextval('usuario_id_seq'::regclass),
    rol_id integer,
    nombre character varying(50) COLLATE pg_catalog."default",
    correo character varying(50) COLLATE pg_catalog."default",
    password character varying(50) COLLATE pg_catalog."default",
    updated timestamp without time zone,
    deleted timestamp without time zone,
    enabled boolean NOT NULL,
    archived boolean NOT NULL,
    carrera_id integer NOT NULL DEFAULT nextval('usuario_carrera_id_seq'::regclass),
    CONSTRAINT id_usuario PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.usuario
    OWNER to postgres;


--TABLAS DE ROMPIMIENTO--

CREATE TABLE IF NOT EXISTS public.ticket_respuesta
(
    id integer NOT NULL DEFAULT nextval('ticket_respuesta_id_seq'::regclass),
    ticket_id integer NOT NULL DEFAULT nextval('ticket_respuesta_ticket_id_seq'::regclass),
    respuesta_id integer NOT NULL DEFAULT nextval('ticket_respuesta_respuesta_id_seq'::regclass),
    CONSTRAINT pk_ticket_carrera PRIMARY KEY (id),
    CONSTRAINT fk_respuesta FOREIGN KEY (respuesta_id)
        REFERENCES public.respuesta (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_ticket FOREIGN KEY (ticket_id)
        REFERENCES public.ticket (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.ticket_respuesta
    OWNER to postgres;


CREATE TABLE IF NOT EXISTS public.usuario_carrera
(
    id integer NOT NULL DEFAULT nextval('usuario_carrera_id_seq1'::regclass),
    carrera_id integer NOT NULL DEFAULT nextval('usuario_carrera_carrera_id_seq'::regclass),
    usuario_id integer NOT NULL DEFAULT nextval('usuario_carrera_usuario_id_seq'::regclass),
    CONSTRAINT pk_carrera_usuario PRIMARY KEY (id),
    CONSTRAINT fk_carrera FOREIGN KEY (carrera_id)
        REFERENCES public.carrera (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_usuario FOREIGN KEY (usuario_id)
        REFERENCES public.usuario (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.usuario_carrera
    OWNER to postgres;




CREATE TABLE IF NOT EXISTS public.usuario_ticket
(
    id integer NOT NULL DEFAULT nextval('usuario_ticket_id_seq'::regclass),
    usuario_id integer NOT NULL DEFAULT nextval('usuario_ticket_usuario_id_seq'::regclass),
    ticket_id integer NOT NULL DEFAULT nextval('usuario_ticket_ticket_id_seq'::regclass),
    CONSTRAINT pk_usuario PRIMARY KEY (id),
    CONSTRAINT fk_ticket FOREIGN KEY (ticket_id)
        REFERENCES public.ticket (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_usuario FOREIGN KEY (usuario_id)
        REFERENCES public.usuario (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.usuario_ticket
    OWNER to postgres;


