const Influx = require('influx');
const express = require('express');
const path = require('path');
const os = require('os');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const influx = new Influx.InfluxDB('http://10.36.54.195:8086/zero_pcp');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({origin : true}));
app.set('port', 3000);

influx.getMeasurements()
  .then(names => console.log('My measurement names are: ' + names.join(', ')))
  .then(() => {
    app.listen(app.get('port'), () => {
      console.log(`Listening on ${app.get('port')}.`);
    });
  })
  .catch(error => console.log({ error }));

app.get('/api/v1/usage', (request, response) => {
  let metric= request.query.metric;
  console.log("got request")
  influx.query(`SELECT mean("_cpu0"), mean("_cpu1"), mean("_cpu2"), mean("_cpu3"), mean("_cpu4"), mean("_cpu5"), mean("_cpu6"), mean("_cpu7"), mean("_cpu8"), mean("_cpu9"), mean("_cpu10"), mean("_cpu11"), mean("_cpu12"), mean("_cpu13"), mean("_cpu14"), mean("_cpu15"), mean("_cpu16"), mean("_cpu17"), mean("_cpu18"), mean("_cpu19"), mean("_cpu20"), mean("_cpu21"), mean("_cpu22"), mean("_cpu23"), mean("_cpu24"), mean("_cpu25"), mean("_cpu26"), mean("_cpu27"), mean("_cpu28"), mean("_cpu29"), mean("_cpu30"), mean("_cpu31"), mean("_cpu32"), mean("_cpu33"), mean("_cpu34"), mean("_cpu35"), mean("_cpu36"), mean("_cpu37"), mean("_cpu38"), mean("_cpu39"), mean("_cpu40"), mean("_cpu41"), mean("_cpu42"), mean("_cpu43"), mean("_cpu44"), mean("_cpu45"), mean("_cpu46"), mean("_cpu47"), mean("_cpu48"), mean("_cpu49"), mean("_cpu50"), mean("_cpu51"), mean("_cpu52"), mean("_cpu53"), mean("_cpu54"), mean("_cpu55"), mean("_cpu56"), mean("_cpu57"), mean("_cpu58"), mean("_cpu59"), mean("_cpu60"), mean("_cpu61"), mean("_cpu62"), mean("_cpu63"), mean("_cpu64"), mean("_cpu65"), mean("_cpu66"), mean("_cpu67"), mean("_cpu68"), mean("_cpu69"), mean("_cpu70"), mean("_cpu71"), mean("_cpu72"), mean("_cpu73"), mean("_cpu74"), mean("_cpu75"), mean("_cpu76"), mean("_cpu77"), mean("_cpu78"), mean("_cpu79"), mean("_cpu80"), mean("_cpu81"), mean("_cpu82"), mean("_cpu83"), mean("_cpu84"), mean("_cpu85"), mean("_cpu86"), mean("_cpu87") FROM "perfevent_hwcounters_LLC_MISSES_value" WHERE time >= now() - 1s and time <= now() GROUP BY time(1s) fill(null)`)
    .then(result => {response.status(200).json(result);})
    .catch(error => response.status(500).json({ error }));
});

app.get('/api/v1/usaget2', (request, response) => {
  let metric= request.query.metric;
  console.log("got request")
  influx.query(`SELECT mean("_cpu0"), mean("_cpu1"), mean("_cpu2"), mean("_cpu3"), mean("_cpu4"), mean("_cpu5"), mean("_cpu6"), mean("_cpu7"), mean("_cpu8"), mean("_cpu9"), mean("_cpu10"), mean("_cpu11"), mean("_cpu12"), mean("_cpu13"), mean("_cpu14"), mean("_cpu15"), mean("_cpu16"), mean("_cpu17"), mean("_cpu18"), mean("_cpu19"), mean("_cpu20"), mean("_cpu21"), mean("_cpu22"), mean("_cpu23"), mean("_cpu24"), mean("_cpu25"), mean("_cpu26"), mean("_cpu27"), mean("_cpu28"), mean("_cpu29"), mean("_cpu30"), mean("_cpu31"), mean("_cpu32"), mean("_cpu33"), mean("_cpu34"), mean("_cpu35"), mean("_cpu36"), mean("_cpu37"), mean("_cpu38"), mean("_cpu39"), mean("_cpu40"), mean("_cpu41"), mean("_cpu42"), mean("_cpu43"), mean("_cpu44"), mean("_cpu45"), mean("_cpu46"), mean("_cpu47"), mean("_cpu48"), mean("_cpu49"), mean("_cpu50"), mean("_cpu51"), mean("_cpu52"), mean("_cpu53"), mean("_cpu54"), mean("_cpu55"), mean("_cpu56"), mean("_cpu57"), mean("_cpu58"), mean("_cpu59"), mean("_cpu60"), mean("_cpu61"), mean("_cpu62"), mean("_cpu63"), mean("_cpu64"), mean("_cpu65"), mean("_cpu66"), mean("_cpu67"), mean("_cpu68"), mean("_cpu69"), mean("_cpu70"), mean("_cpu71"), mean("_cpu72"), mean("_cpu73"), mean("_cpu74"), mean("_cpu75"), mean("_cpu76"), mean("_cpu77"), mean("_cpu78"), mean("_cpu79"), mean("_cpu80"), mean("_cpu81"), mean("_cpu82"), mean("_cpu83"), mean("_cpu84"), mean("_cpu85"), mean("_cpu86"), mean("_cpu87") FROM "perfevent_hwcounters_cpu_cache_references_value" WHERE time >= now() - 1s and time <= now() GROUP BY time(1s) fill(null)`)
    .then(result => {response.status(200).json(result);})
    .catch(error => response.status(500).json({ error }));
});
