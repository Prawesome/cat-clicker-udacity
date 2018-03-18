var ViewModel = function() {
    this.catName = ko.observable('Toby');
    this.catImage = ko.observable('./img/4154543904_6e2428c421_z.jpg');
    this.catCount = ko.observable(0);

    this.incrementCount = function() {
        this.catCount(this.catCount() + 1);
    };

    this.catCategory = ko.computed(function() {
        if(this.catCount() < 10) {
            return "child";
        }  else {
            return "kilavan";
        }
    }, this);

    this.catNicks = ko.observableArray([
        {nick : 'Toby'},
        {nick : 'Pottan'}
    ]);
};

ko.applyBindings(new ViewModel());