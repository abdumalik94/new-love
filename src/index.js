/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
 module.exports = function getLoveTriangleschislo(preferences = []) {
 	var dlina = preferences.length; 
 	var chislo = 0;  
 	for (var i = 0; i < dlina; i++) 
 	{ 
 		var t = preferences[i] - 1;
 		if (t == i) continue;
 		var t2 = preferences[t] - 1;
 		if (t == t2) continue;
 		var t3 = preferences[t2] - 1;
 		if (t3 == t2) continue;
 		if (t3 == i) 
 		{
 			chislo++;
 		}
 	}
 	return chislo / 3;
 };

