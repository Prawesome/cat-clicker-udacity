var initCats = [{
    name: 'Toby',
    src: './img/4154543904_6e2428c421_z.jpg',
    count: 0,
    nick: 'nick1'
},
{
    name: 'Jacki',
    src: './img/434164568_fea0ad4013_z.jpg',
    count: 0,
    nick: 'nick2'
}, {
    name: 'kuttu',
    src: '../img/9648464288_2516b35537_z.jpg',
    count: 0,
    nick: 'nick3'
}];

var ViewModel = function () {
    var self = this;

    this.catList = ko.observableArray([]);
    initCats.forEach(cat => {
        self.catList.push(new Cat(cat));
    });

    this.currentCat = ko.observable(self.catList()[0]);

    this.incrementCount = function () {
        this.catCount(this.catCount() + 1);
    };

    this.changeCat = function(item) {
        self.currentCat(item);
    }
};

var Cat = function (data) {
    this.catName = ko.observable(data.name);
    this.catImage = ko.observable(data.src);
    this.catCount = ko.observable(data.count);
    this.catNick = ko.observable(data.nick);

    this.catCategory = ko.computed(function () {
        if (this.catCount() < 10) {
            return "child";
        } else {
            return "kilavan";
        }
    }, this);
};

ko.applyBindings(new ViewModel());