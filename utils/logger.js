import chalk from 'chalk';

const logger = {
    log: (level, message, value = '') => {
        const now = new Date().toLocaleString();

        const colors = {
            info: chalk.green,
            warn: chalk.yellow,
            error: chalk.red,
            success: chalk.blue,
            debug: chalk.magenta,
        };

        const color = colors[level] || chalk.white;
        const levelTag = `[ ${level.toUpperCase()} ]`;
        const timestamp = `[ ${now} ]`;

        const formattedMessage = `${chalk.green("[ Taker-Mine ]")} ${chalk.cyanBright(timestamp)} ${color(levelTag)} ${message}`;

        let formattedValue = ` ${chalk.green(value)}`;
        if (level === 'error') {
            formattedValue = ` ${chalk.red(value)}`;
        } else if (level === 'warn') {
            formattedValue = ` ${chalk.yellow(value)}`;
        }
        if (typeof value === 'object') {
            const valueColor = level === 'error' ? chalk.red : chalk.green;
            formattedValue = ` ${valueColor(JSON.stringify(value))}`;
        }

        console.log(`${formattedMessage}${formattedValue}`);
    },

    info: (message, value = '') => logger.log('info', message, value),
    warn: (message, value = '') => logger.log('warn', message, value),
    error: (message, value = '') => logger.log('error', message, value),
    success: (message, value = '') => logger.log('success', message, value),
    debug: (message, value = '') => logger.log('debug', message, value),
};

export default logger;
