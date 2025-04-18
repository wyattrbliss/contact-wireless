import { TowerData } from './types';

export function scrollToSection(id: string) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({block: 'center', behavior: 'smooth'});
    } else {

        // allow time for routing
        setTimeout(() => {
            const section = document.getElementById(id);
            section?.scrollIntoView({block: 'center', behavior: 'smooth'})
        }, 500);
    }
}

export function addTransitionOnIntersection() {
    const observer = new IntersectionObserver(entries => {  
    	console.log('running')
        // Loop over the entries
        entries.forEach(entry => {
          // If the element is visible
          if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('sliding-animation');
          }
        });
    });
      
    if(document.querySelector('sliding-image')) {
        observer.observe(document.querySelector('.sliding-image')!);
    }
}

export function parseTowerData() {
	const rows = TOWER_DATA.split('\n');
	const headers = rows[0].split(',');
	const towers: TowerData[] = [];

    for (let i = 1; i < rows.length; i++) {
        const values = rows[i].split(',');
        const obj = {} as TowerData;

        for (let j = 0; j < headers.length; j++) {
            const key = headers[j].trim().split(' ')[0].toLowerCase();
            const value = values[j].trim();
            obj[key as keyof TowerData] = value;
        }

        towers.push(obj);
    }

	return towers;
}

const TOWER_DATA =
// Headers
'City,State,Elevation (Ft MSL),ASR #,Height (Ft),Top (HAAT),Latitude,Longitude,Description' + '\n' +
// MN
'Brainerd,MN,1256,1022695,350,375,46.3222222,-94.16250000000001,Southeast corner of City of Brainerd' + '\n' +
'Cold Spring,MN,1430,1024469,350,636,45.43,-94.38472222222222,On Hwy 23 west of St Cloud' + '\n' +
//'Duluth,MN,1188,XXX,180,203,46.7880556,-92.11333333333333,On south end of the City of Duluth on top of Duluth hill' + '\n' +
'Isanti,MN,982,1025211,380,XXX,45.5213889,-93.17444444444445,Near Cambridge at Hwy 65/95 intersection' + '\n' +
'Kerrick (Duquette),MN,1170,1035209,440,XXX,46.3813889,-92.54416666666667,Near Duquette on Hwy 23 between Askov and Duluth' + '\n' +
'Litchfield (Greenleaf),MN,1200,1061463,350,XXX,45.0216667,-94.53055555555555,On Hwy 12 between Dassel and Willmar' + '\n' +
'Little Falls,MN,1100,1030314,125,215,45.9438889,-94.40111111111112,Old AT&T Microwave tower northeast of town' + '\n' +
'Monticello (Buffalo),MN,1075,XXX,180,XXX,45.2666667,-93.89750000000001,On Hwy 23 and I94 near Monticello' + '\n' +
'Rochester,MN,1240,1034334,350,423,44.0872222,-92.40694444444445,Northeast of downtown  Rochester near Hwy 63' + '\n' +
'Rockford (Greenfield),MN,1075,1024467,180,282,45.0558333,-93.71555555555555,Near Rockford at Hwy 55 northwest of Minneapolis' + '\n' +
// WI
'Bay City,WI,1100,1042739,370,XXX,44.583,-92.4045,On WI Hwy 35 along Mississippi River across from Red Wing' + '\n' +
'Emerald,WI,1275,XXX,180,XXX,45.0794444,-92.29916666666666,North of Baldwin near I94 about 25 miles east of WI/MN border' + '\n' +
'LaCrosse , WI,XXX,XXX,140,XXX,XXX,XXX,On Grand Dads Bluff (2 towers located at site)' + '\n' +
'Rice Lake,WI,XXX,XXX,180,XXX,44.8725,-91.30611111111111,On Hwy 63 north of Eau Claire' + '\n' +
'River Falls,WI,1040,1042738,360,XXX,44.9027778,-92.68994444444445,Near I94 about 7 miles east of WI/MN border' + '\n' +
'Trego,WI,XXX,XXX,180,XXX,45.9525,-91.86166666666666,Just west of Hwy 53 and north of City of Trego' + '\n' +
// WA
'Mt. Vernon,WA,XXX,XXX,160,XXX,XXX,XXX,Spirit Mountain - Northern part of state near to Seattle (2 towers located at site)'

