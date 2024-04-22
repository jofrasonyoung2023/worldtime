const moment = require('moment-timezone');

function getTime() {
  // 获取当前时间
  const now = new Date();

  // 获取所有时区的时间
  const timezones = moment.tz.names();
  const times = [];

  // 循环遍历所有时区
  for (let i = 0; i < timezones.length; i++) {
    // 获取当前时区的时间
    const time = moment.tz(now, timezones[i]);
    // 将时间格式化为字符串
    const timeStr = time.format('YYYY-MM-DD HH:mm:ss');
    // 将时间和时区名称添加到数组中
    times.push(`${timezones[i]}: ${timeStr}`);
  }

  // 返回所有时区的时间
  return times;
}

module.exports = getTime;