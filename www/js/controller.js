/**
 * Created by meteor on 2/18/16.
 */
angular.module('antiApp.controllers',[])
  .controller('getHomeList1',function($scope){
    $scope.dataList1 = [
      {title:'河北省石家庄市惠民批发市场',time:'2015-12-2',reporter:'李**'},
      {title:'北京市大民批发市场',time:'2015-12-5',reporter:'张**'},
      {title:'天津市人民批发市场',time:'2015-12-5',reporter:'张**'}
    ]
  })
  .controller('getHomeList2',function($scope){
    $scope.dataList2 = [
      {title:'国家质检总局发现大众TSG存在致的控制器的缺陷',time:'2015-12-2'},
      {title:'广东警方联合7省开展打假集群战役 破2000万网售假烟案',time:'2015-12-5'}
    ]
  })

