export function Delete(id){
	return fetch(`/novels/${id}` ,{
		method : "DELETE",
	}).then((resp) => resp.json()) 
}

export function Patch(novel){
	return fetch(`/novels/${novel.id}` ,{
		method : "PATCH",
		body: JSON.stringify(novel),
		headers:{
			"Content-Type": "application/json"
		}
}).then((resp) => resp.json()) 
}

export function Post(novel){
	return fetch('/novels',{
		method : "POST",
		body: JSON.stringify(novel),
		headers:{
			"Content-Type": "application/json"
		}
	}).then((resp) => resp.json()) 
}