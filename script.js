/**
 * Digital Clock — displays live time for UTC, EST, PST, and CET timezones.
 * Updates every second.
 */

const timeZones = [
    { id: 'utc-time', timeZone: 'UTC' },
    { id: 'est-time', timeZone: 'America/New_York' },
    { id: 'pst-time', timeZone: 'America/Los_Angeles' },
    { id: 'cet-time', timeZone: 'Europe/Paris' },
];

/**
 * Formats a Date object into HH:MM:SS for a given IANA timezone.
 * @param {Date} date
 * @param {string} timeZone - IANA timezone string (e.g. 'America/New_York')
 * @returns {string}
 */
function formatTime(date, timeZone) {
    return date.toLocaleTimeString('en-GB', {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    });
}

/** Updates every clock display with the current time. */
function updateClocks() {
    const now = new Date();
    timeZones.forEach(({ id, timeZone }) => {
        const el = document.getElementById(id);
        if (el) {
            el.textContent = formatTime(now, timeZone);
        }
    });
}

// Run immediately so there's no 1-second blank flash, then update every second.
updateClocks();
setInterval(updateClocks, 1000);
