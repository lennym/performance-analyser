module.exports = function(report) {
  console.log(`Based on ${report.summary.count} load(s) of ${report.summary.url}:`);
  report.metrics.forEach((metric) => {
    console.log(`${metric.key}: ${(metric.value/1000).toFixed(2)}s`);
  });
};