/*--------------------- written by gaurav dhenwal------------*/

/*----------------------------------------------------------
	
				           DANDO


-------------------------------------------------------------*/
var app = angular.module("data-app" , ["ui.tree"]);
app.config(['$compileProvider',
    function ($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|blob):/);}]);
app.controller("myCntrl", function($scope){
 $scope.levels = 0;
 $scope.newjson= 0;
 $scope.saved = 1;
 $scope.master = [];
 
 


 
/*---------------------new level------------------------*/
	$scope.newLevel = function(){
		$scope.saved = 0;
		
		var data = $scope.list;
		 $scope.levels = $scope.levels + 1;
		 level = $scope.levels;
		data.push({
			id: level,
			title: 'Level ' + level,
			para: [{
				id:level *10,
				title: 'Level '+level+' Para 1',
				Value: 'Level '+level+' Value 1'
				},
				{
				id:level *10,
				title: 'Level '+level+' Para 2',
				Value: 'Level '+level+' Value 2'
				},
				{
				id:level *10,
				title: 'Level '+level+' Para 3',
				Value: 'Level '+level+' Value 3'
				},
				{
				id:level *10,
				title: 'Level '+level+' Para 4',
				Value: 'Level '+level+' Value 4'
				}],
				nodes:[]
			})
			
		}

/*------------------ new sublevel-----------------*/             
			 $scope.newSubLevel = function (scope) {
				 $scope.saved= 0;
        var levelData = scope.$modelValue;
        levelData.nodes.push({
          id: levelData.id * 10 + levelData.nodes.length,
          title: levelData.title + '.' + (levelData.nodes.length + 1),
		  para:[
		  	{id:levelData.id*100 ,
			title:'Level '+levelData.id + '.' +(levelData.nodes.length + 1)+' Para 1',
			Value: 'Level '+levelData.id + '.' +(levelData.nodes.length + 1)+' Value 1' },
			{id:levelData.id*100 ,
			title:'Level '+levelData.id + '.' +(levelData.nodes.length + 1)+' Para 2',
			Value: 'Level '+levelData.id + '.' +(levelData.nodes.length + 1)+' Value 2' }
		  ]
        });
      };
/*----------------------------------------------------*/	  


/*-----------------------toggle remove functions------------*/
$scope.toggle = function (scope) {
        scope.toggle();
      };
 $scope.remove = function (scope) {
	 	$scope.saved = 0;
        scope.remove();
      };	  
	  
/*------------------------------------------------------*/


	  /*-------------------------------------------*/
			 $scope.list =[
			 
			 ];// main array initially empty whichwill contain JSON data 

$scope.save = function(){
	$scope.saved = 1;
	var json = JSON.stringify( $scope.list);
 var blob = new Blob([json ], { type : 'application/json' });
$scope.url = (window.URL || window.webkitURL).createObjectURL( blob );
	
	}			 
			 
			 
			  $scope. new_json = function (){ //for creating new json file
				  	if($scope.saved === 1 && $scope.newjson === 0){
						$scope.newjson = 1 ;
						$scope.saved = 0;
						$scope.levels = 0;
						$scope.newLevel()
						
						}
					else if($scope.saved === 1 && $scope.newjson === 1){
						$scope.list = angular.copy($scope.master);
						$scope.levels = 0;
						$scope.newLevel();
						}
					else{
						alert("Save the JSON first")}
					
				  } 
               })