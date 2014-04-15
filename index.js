exports.formatters = {
	trim: function(string){ return string.trim(); },
	upper: function(string){ return string.toUpperCase(); },
	lower: function(string){ return string.toLowerCase(); }
};

exports.format = function format(formatters, string){
	if(arguments.length < 2){
		return format.bind(null, formatters);
	}

	return formatters.map(function(input){
		return input.split(/\s+/);
	}).filter(function(input){
		return exports.formatters.hasOwnProperty(input[0]);
	}).map(function(input){
		return { fn: exports.formatters[input[0]], args: input.slice(1) };
	}).reduce(function(string, formatter){
		return formatter.fn(string, formatter.args);
	}, string);
};

exports.fromString = function(string){
	return exports.format(string.split(/\s*\|\s*/).slice(1));
};
