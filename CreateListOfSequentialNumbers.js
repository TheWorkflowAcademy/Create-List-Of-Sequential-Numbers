//To create a range of numbers.
//e.g. 1, 2, 3, ..., n
//If you wanted to create a list to iterate 20 times, subtract it by 1, and use this as the 2nd argument for the repeat() function.
//For the example of iterating 20 times, use 19 in the script below.
dataSet = repeat(',',19);
listIterator = list();

n=0;
for each d in dataSet{
	n=n+1;
	listIterator.add(n);
}

info "Loop counter: " + n;
info "dataSet variable content: " + dataSet;
info "dataSet size: " + dataSet.size();
info "";
info listIterator;