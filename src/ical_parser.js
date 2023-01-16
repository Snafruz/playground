const fetch = require('node-fetch')
const ical = require('ical')


const esegui = async () => {

	try{
		const response = await fetch('https://www.airbnb.it/calendar/ical/934961.ics?s=cdc3b614123a0f34843a7da6b69e48b3')
		const iCalString = await response.text()
	
		const resultJSON = ical.parseICS(iCalString)
		console.log(resultJSON)
	} catch (err){
		console.log(err)
	}

}

esegui()


//const resultJSON = ICalParser.toJSON(iCalString)

//console.log(resultJSON)