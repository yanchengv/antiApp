/**
 * Created by meteor on 2/18/16.
 */
angular.module('antiApp.controllers',[])
  .controller('getHomeList1',function($scope){
    $scope.dataList1 = [
      {title:'河北省石家庄市惠民批发市场',content:'物价太高物价太高物价太高物价太高物价太高',time:'2015-12-2',reporter:'李**'},
      {title:'北京市大民批发市场',content:'物价太高物价太高物价太高物价太高物价太高',time:'2015-12-5',reporter:'张**'},
      {title:'天津市人民批发市场',content:'物价太高物价太高物价太高物价太高物价太高',time:'2015-12-5',reporter:'张**'}
    ]
  })
  .controller('getHomeList2',function($scope){
    $scope.dataList2 = [
      {title:'国家质检总局发现大众TSG存在致的控制器的缺陷',time:'2015-12-2'},
      {title:'广东警方联合7省开展打假集群战役 破2000万网售假烟案',time:'2015-12-5'}
    ]
  })
  .controller('getHomeList3',function($scope){
    $scope.dataList3 = [
      {reporter:'张**',money:'1000',product:'茅台'},
      {reporter:'李**',money:'8',product:'老白干'},
      {reporter:'李**',money:'200',product:'维达纸'}
    ]
  })
  .controller('getVerSelectData',function($scope){
    $scope.datas = [
      {id:1,name:'海飞丝'},
      {id:2,name:'飘柔'},
      {id:3,name:'蓝月亮'},
      {id:2,name:'老干妈'}

    ]
  })
  .controller('mySubmit',function($scope,$state){
    //输入验证码点击提交
    $scope.codeSubmit = function(){
      var product =  $scope.product;
      $state.go('tab.goVerification',product)
    }
  })
  //公用方法
  .controller('myCommon',function($scope,$state){
    $scope.goBack = function(){
      $state.go('tab.verification')
    }

  })
