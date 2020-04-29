'use strict';
// import mentio from 'ment.io';

angular.module('myApp.view1', ['ngRoute', 'mentio'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])

  .controller('View1Ctrl', ['$scope', 'mentioUtil', function ($scope, mentioUtil) {

    $scope.getTagTextRaw = function (item) {
      return '<i class="mention-tag-text" style="color:#a52a2a;">' + item.name + '</i>';
    };
    
    $scope.getTagTextRaw = function (item) {
      return item.name;
    };

    $scope.searchTags = function (term) {
      var tagsList = [];
      angular.forEach($scope.allTagList2, function (item) {
        if (item.id.toUpperCase().indexOf(term.toUpperCase()) >= 0) {
          if (tagsList.length <= 5) {
            tagsList.push(item);
          }
        }
      });

      $scope.tags = tagsList;
      return tagsList;
    };

    $scope.allTagList = [{
      "id": "ctp",
      "name": "#ctp"
    }, {
      "id": "earningRelease",
      "name": "#earningRelease"
    }, {
      "id": "presssrelease",
      "name": "#presssrelease"
    }, {
      "id": "inversor-conference",
      "name": "#inversor-conference"
    }, {
      "id": "live release",
      "name": "#IACLive"
    }, {
      "id": "reval",
      "name": "#reval"
    }, {
      "id": "margin",
      "name": "#margin"
    }, {
      "id": "phonecall",
      "name": "#phonecall"
    }, {
      "id": "Q4",
      "name": "#Q4"
    }];


    $scope.allTagList2 = [{
      "id": "ctp",
      "name": "@ctp"
    }, {
      "id": "earningRelease",
      "name": "@earningRelease"
    }, {
      "id": "presssrelease",
      "name": "@presssrelease"
    }, {
      "id": "inversor-conference",
      "name": "@inversor-conference"
    }, {
      "id": "live release",
      "name": "@IACLive"
    }, {
      "id": "reval",
      "name": "@reval"
    }, {
      "id": "margin",
      "name": "@margin"
    }, {
      "id": "phonecall",
      "name": "@phonecall"
    }, {
      "id": "Q4",
      "name": "@Q4"
    }];

    $scope.tinyMceOptions = {
      init_instance_callback: function (editor) {
        $scope.iframeElement = editor.iframeElement;
      },
      resize: false,
      width: '100%',
      height: 150,
      plugins: 'print textcolor',
      toolbar: "bold italic underline strikethrough| undo redo",
      toolbar_items_size: 'small',
      menubar: false,
      statusbar: false
    };

  }]);