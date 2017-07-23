
var data = require('./match_sample.json');

class MatchOverviewApi {
    static getMatchOverview() {
        return new Promise((resolve, reject) => setTimeout(() => resolve(data)), 2000);
    }
}

export default MatchOverviewApi;
