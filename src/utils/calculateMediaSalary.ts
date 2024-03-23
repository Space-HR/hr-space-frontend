type TMinMaxSalary = {
	minSalary?: number;
	maxSalary?: number;
};

export const calculateMediaSalary = (values: TMinMaxSalary): number => {
	const { minSalary, maxSalary } = values;

    if (minSalary && maxSalary) {
        return (minSalary + maxSalary) / 2;
    } 
    if (minSalary) {
        return minSalary;
    } 
    if (maxSalary) {
        return maxSalary;
    }
	return 30000;
};
