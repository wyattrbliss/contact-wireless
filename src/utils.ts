import { TowerData } from './types';

export function scrollToSection(id: string) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({behavior: 'smooth'});
    } else {

        // allow time for routing
        setTimeout(() => {
            const section = document.getElementById(id);
            section?.scrollIntoView({behavior: 'smooth'})
        }, 500);
    }
}

export function addTransitionOnIntersection(selector: string, transition: string, targetSelector: string) {
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
'City,State,Elevation (Ft MSL),ASR #,Height (Ft),Top (HAAT),Latitude,Longitude' + '\n' +
// MN
'Brainerd,MN,1256,1022695,350,375,46.3222222,-94.16250000000001' + '\n' +
'Cold Spring,MN,1430,1024469,350,636,45.43,-94.38472222222222' + '\n' +
'Duluth,MN,1188,XXX,180,203,46.7880556,-92.11333333333333' + '\n' +
'Isanti,MN,982,1025211,380,XXX,45.5213889,-93.17444444444445' + '\n' +
'Kerrick (Duquette),MN,1170,1035209,440,XXX,46.3813889,-92.54416666666667' + '\n' +
'Litchfield (Greenleaf),MN,1200,1061463,350,XXX,45.0216667,-94.53055555555555' + '\n' +
'Little Falls,MN,1100,1030314,125,215,45.9438889,-94.40111111111112' + '\n' +
'Monticello (Buffalo),MN,1075,XXX,180,XXX,45.2666667,-93.89750000000001' + '\n' +
'Rochester,MN,1240,1034334,350,423,44.0872222,-92.40694444444445' + '\n' +
'Rockford (Greenfield),MN,1075,1024467,180,282,45.0558333,-93.71555555555555' + '\n' +
// WI
'Bay City,WI,1100,1042739,370,XXX,44.583,-92.4045' + '\n' +
'Emerald,WI,1275,XXX,180,XXX,45.0794444,-92.29916666666666' + '\n' +
'LaCrosse , WI,XXX,XXX,140,XXX,XXX,XXX' + '\n' +
'Rice Lake,WI,XXX,XXX,180,XXX,44.8725,-91.30611111111111' + '\n' +
'River Falls,WI,1040,1042738,360,XXX,44.9027778,-92.68994444444445' + '\n' +
'Trego,WI,XXX,XXX,180,XXX,45.9525,-91.86166666666666' + '\n' +
// WA
'Mt. Vernan,WA,XXX,XXX,160,XXX,XXX,XXX'

