const seeder = require('mongoose-seed')

const db = 'mongodb://localhost:27017/minuteApp'

seeder.connect(db, function() {
    seeder.loadModels([
        './server/db/interval'
    ]);
    seeder.populateModels(data, (err, done) => {
        if (err) {
            return console.log("seed error", err)
        }
        if (done) {
            return console.log("seed done", done)
        }
        seeder.disconnect()
    })
})

const data = [
    {
        'model': 'Interval',
        'documents': [
            {
                "time": 1
            },
            {
                "time": 100
            },
            {
                "time": 500
            },
            {
                "time": 1000
            },
            {
                "time": 5000
            },
        ]
    }
]