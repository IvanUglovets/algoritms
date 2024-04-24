export const quickSort = (list) => {
	if (list.length < 2) {
		return list
	} else {
		const pivot = list[0];
		const less = []
		const then = [];
		for (let i = 1; i < list.length; i++) {
			if (list[i] > pivot) {
				then.push(list[i])
			}else{
				less.push(list[i])
			}
		}
		return  [...quickSort(less), pivot, ...quickSort(then)]
	}
}

