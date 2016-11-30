"use strict";
var app = angular.module("TravelApp", []);

app.controller("BooksCtrl", function($scope) {
    $scope.guides=[];

    $.ajax({
        method: 'GET',
        url: '../data/guides.json'
    }).done(function(data) {
    	var newData = data;
        $scope.guides = newData;
        console.log("Data", newData);
		console.log("DREW", $scope.guides);
		$scope.$apply();
    });

});