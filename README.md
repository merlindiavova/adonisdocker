# AdonisJs Docker Env

A simple helper to setup an AdonisJs Docker devevelopment environment.

## Installation

```bash
npm install -g adonisjs-docker-env
```

This will give you access to the global ```adonisdocker ``` script.

## Usage

```bash
cd /path/to/your/project

copyadonisd
```

This will copy the the adonisd script and supporting docker files to your project.

++++
<pre class="highlight line-numbers language-bash" data-line="2,5">
<code>.
├── adonisd <small>- The main script that has all the commands</small>
├── docker-compose.yml <small>- Defines all the services for the dev env.</small>
└── docker
    ├── app
        ├── Dockerfile  <small>- Build instructions for Docker</small>
        └── start <small>- Start script for dev env</small>
    ├── mysql
        ├── conf.d
            └── logging.cnf
        └── logs
            └── .gitignore
</code>
</pre>
++++

### Initialising

Now that the files have been copied to your project you need to run:

```bash
bash adonisd init
```

This command: 
- Looks for the AdonisJs ```ace``` script in your project root (will fail if it cannot be found).
-  Updates your .env file with the following:
    - HOST=0.0.0.0
    - PORT=8080
    - APP_PORT=80
    - DB_PORT=3306
    - DB_HOST=mysql
- Makes the ```adonisd``` script executable

### Starting the environment

Run:
```bash
adonisd start
```

This will boot the dev env. You can access your project at (default settings): ```http://localhost```