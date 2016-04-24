angular.module('starter.controllers', [])

    .directive('hideTabs', function($rootScope) {
        return {
            restrict: 'A',
            link: function($scope, $el) {
                $scope.$on("$ionicView.beforeEnter", function () {
                    $rootScope.hideTabs = true;
                });
                $scope.$on("$ionicView.beforeLeave", function () {
                    $rootScope.hideTabs = false;
                });
            }
        };
    })




    .controller('IndexCtrl', function($scope) {
            //check login

        })
    .controller('DashCtrl', function($scope,$state) {
        /*$scope.onSwipeLeft = function(){
            $state.go("tab.newest");
        };*/
        $scope.onSwipeRight = function(){
            $state.go("tab.dash");
        };
        /*获取物品列表*/
            $scope.items = [
                { id: 0 },
                { id: 1 },
                { id: 2 },
                { id: 3 },
                { id: 4 },
                { id: 5 },
                { id: 6 },
                { id: 7 },
                { id: 8 },
                { id: 9 }

            ];

    })

    .controller('GoodsListCtrl', function($scope) {
        $scope.items = [
            { id: 0 },
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
            { id: 8 },
            { id: 9 },
            { id: 10 },
            { id: 11 },
            { id: 12 },
            { id: 13 }


        ];
        $scope.doRefresh = function() {
            $http.get('/new-items')
                .success(function(newItems) {
                    $scope.items = newItems;
                })
                .finally(function() {
                    // 停止广播ion-refresher
                    $scope.$broadcast('scroll.refreshComplete');
                });
        };
    })
    .controller('GoodsDetailCtrl', function($scope) {

    })
    .controller('CategoryCtrl', function($scope, $ionicPopup, $ionicActionSheet, $timeout,$state) {
        $scope.items = [
            { id: 0 },
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
            { id: 8 },
            { id: 9 },
            { id: 10 },
            { id: 11 },
            { id: 12 },
            { id: 13 }


        ];
        // 评论
        $scope.goodsComment = function() {
            $scope.data = {}

            var myPopup = $ionicPopup.show({
                template: '<input type="text" ng-model="data.wifi">',
                title: '输入评论内容',
                subTitle: '',
                scope: $scope,
                buttons: [
                    { text: '取消' },
                    {
                        text: '<b>确定</b>',
                        type: 'button-balanced',
                        onTap: function(e) {
                            if (!$scope.data.wifi) {
                                //don't allow the user to close unless he enters wifi password
                                e.preventDefault();
                            } else {
                                return $scope.data.wifi;
                            }
                        }
                    },
                ]
            });
            myPopup.then(function(res) {
                console.log('Tapped!', res);
            });

        };

        // 收藏
        $scope.goodsBookmark = function() {
            $scope.data = {}

            var myPopup = $ionicPopup.show({
                template: '',
                title: '收藏成功',
                subTitle: '',
                scope: $scope,
                buttons: [

                    {
                        text: '<b>确定</b>',
                        type: 'button-balanced',

                    },
                ]
            });
            myPopup.then(function(res) {
                console.log('Tapped!', res);
            });

        };

        // 联系卖家
        $scope.goodsContact = function() {

            // 显示
            $ionicActionSheet.show({
                buttons: [

                    { text: '电话' },
                    { text: '短信' },
                    { text: 'QQ' },
                ],

                titleText: '联系方式',
                cancelText: '取消',
                buttonClicked: function(index) {
                    return true;
                }
            });

        };

        // 物品选项 举报 分享
        $scope.goodsOption = function() {

            // 显示
            $ionicActionSheet.show({

                buttons: [

                    { text: '分享' },
                    { text: '举报' },

                ],

                titleText: '更多操作',
                cancelText: '取消',
                buttonClicked: function(index) {
                    return true;
                }
            });

        };
    })

    .controller('CategoryDetailCtrl', function($scope,$state) {


       /* $scope.catGoodsDetails = function() {
            $state.go("catGoodsDetail");

        };*/
    })

    .controller('goodsDetailCtrl', function($scope,$state) {



    })
    .controller('CatGoodsDetailCtrl', function($scope,$state) {


    })



    .controller('PublishCtrl', function($scope, $ionicPopup, $ionicActionSheet, $timeout,$state) {// A confirm dialog
        $scope.checkLogin = function() {
            $scope.data = {}

            var myPopup = $ionicPopup.show({
                template: '',
                title: '没登录',
                subTitle: '',
                scope: $scope,
                buttons: [
                    {text: '取消'},
                    {
                        text: '<b>立即登录</b>',
                        type: 'button-balanced',
                        onTap: function (e) {
                            if (!$scope.data.wifi) {
                                //don't allow the user to close unless he enters wifi password
                                e.preventDefault();
                            } else {
                                return $scope.data.wifi;
                            }
                        }
                    },
                ]
            });
            myPopup.then(function (res) {
                console.log('Tapped!', res);
            });
        };

        //
        $scope.uploadPic = function() {

            // 显示
            $ionicActionSheet.show({
                buttons: [

                    { text: '相册' },
                ],

                titleText: '物品图片',
                cancelText: '取消',
                buttonClicked: function(index) {
                    return true;
                }
            });

        };
        //
        $scope.goodsPublish = function() {



        };

        //select category
        $scope.selectCate = function(){


        };


    })


    .controller('DiscoveryCtrl', function($scope, $ionicActionSheet,$ionicPopup, $timeout) {
        //话题讨论发表
        $scope.topicDiscuss = function() {
            $scope.data = {}

            var myPopup = $ionicPopup.show({
                template: '<textarea rows="5" ng-model="">',
                title: '输入讨论内容',
                subTitle: '',
                scope: $scope,
                buttons: [
                    { text: '取消' },
                    {
                        text: '<b>提交</b>',
                        type: 'button-balanced',
                        onTap: function(e) {
                            if (!$scope.data.wifi) {
                                //don't allow the user to close unless he enters wifi password
                                e.preventDefault();
                            } else {
                                return $scope.data.wifi;
                            }
                        }
                    },
                ]
            });
            myPopup.then(function(res) {
                console.log('Tapped!', res);
            });

        };
        //发布求购信息
        $scope.publishsk= function() {
            var alertPopup = $ionicPopup.alert({
                title: '发布成功！',
                template: '',
                buttons: [

                    {
                        text: '<b>确定</b>',
                        type: 'button-balanced',

                    },
                ]
            });

            alertPopup.then(function(res) {
                console.log('确定');
            });
        };


    })


    .controller('AccountCtrl',function($scope,  $ionicActionSheet,$ionicPopup, $timeout) {

        // 更换头像
        $scope.changeAvatar = function() {

            // 显示
            $ionicActionSheet.show({
                buttons: [

                    { text: '相册' },
                ],

                titleText: '更改头像',
                cancelText: '取消',
                buttonClicked: function(index) {
                    return true;
                }
            });

        };
     //修改学校和专业等信息

        $scope.changeUniversity = function() {
            $scope.data = {}

            // An elaborate, custom popup
            var myPopup = $ionicPopup.show({
                template: '<input type="text" placeholder="学校"><br/><input type="text" placeholder="年级"><br/><input' +
                ' type="text" placeholder=" 专业" >',
                title: '输入教育信息',
                subTitle: '',
                scope: $scope,
                buttons: [
                    { text: '取消' },
                    {
                        text: '<b>确定</b>',
                        type: 'button-balanced',
                        onTap: function(e) {
                            if (!$scope.data.wifi) {
                                //don't allow the user to close unless he enters wifi password
                                e.preventDefault();
                            } else {
                                return $scope.data.wifi;
                            }
                        }
                    },
                ]
            });
            myPopup.then(function(res) {
                console.log('Tapped!', res);
            });

        };
        // 修改手机号码
        $scope.changePhone = function() {
            $scope.data = {}

            var myPopup = $ionicPopup.show({
                template: '<input type="text" ng-model="data.wifi">',
                title: '输入手机号码',
                subTitle: '',
                scope: $scope,
                buttons: [
                    { text: '取消' },
                    {
                        text: '<b>确定</b>',
                        type: 'button-balanced',
                        onTap: function(e) {
                            if (!$scope.data.wifi) {
                                //don't allow the user to close unless he enters wifi password
                                e.preventDefault();
                            } else {
                                return $scope.data.wifi;
                            }
                        }
                    },
                ]
            });
            myPopup.then(function(res) {
                console.log('Tapped!', res);
            });

        };

        //修改QQ
        $scope.changeQQ = function() {
            $scope.data = {}

            // An elaborate, custom popup
            var myPopup = $ionicPopup.show({
                template: '<input type="text" ng-model="data.wifi">',
                title: '输入QQ号码',
                subTitle: '',
                scope: $scope,
                buttons: [
                    { text: '取消' },
                    {
                        text: '<b>确定</b>',
                        type: 'button-balanced',
                        onTap: function(e) {
                            if (!$scope.data.wifi) {
                                //don't allow the user to close unless he enters wifi password
                                e.preventDefault();
                            } else {
                                return $scope.data.wifi;
                            }
                        }
                    },
                ]
            });
            myPopup.then(function(res) {
                console.log('Tapped!', res);
            });

        };
        // 积分明细
        $scope.showCredit = function() {
            $scope.data = {}

            var myPopup = $ionicPopup.show({
                template: '<input type="text" ng-model="data.wifi">',
                title: '积分明细',
                subTitle: '',
                scope: $scope,
                buttons: [
                    { text: '取消' },
                    {
                        text: '<b>确定</b>',
                        type: 'button-balanced',
                        onTap: function(e) {
                            if (!$scope.data.wifi) {
                                //don't allow the user to close unless he enters wifi password
                                e.preventDefault();
                            } else {
                                return $scope.data.wifi;
                            }
                        }
                    },
                ]
            });
            myPopup.then(function(res) {
                console.log('Tapped!', res);
            });

        };
        //微博认证
        $scope.weiboAuth = function() {
            $scope.data = {}

            var myPopup = $ionicPopup.show({
                template: '<input type="text" placeholder="微博账号" ><hr/><input placeholder="密码" type="password">',
                title: '微博认证',
                subTitle: '',
                scope: $scope,
                buttons: [
                    { text: '取消' },
                    {
                        text: '<b>提交</b>',
                        type: 'button-balanced',
                        onTap: function(e) {
                            if (!$scope.data.wifi) {
                                //don't allow the user to close unless he enters wifi password
                                e.preventDefault();
                            } else {
                                return $scope.data.wifi;
                            }
                        }
                    },
                ]
            });
            myPopup.then(function(res) {
                console.log('Tapped!', res);
            });

        };
        //学号认证
        $scope.studentAuth = function() {
            $scope.data = {}

            var myPopup = $ionicPopup.show({
                template: '<input type="text" placeholder="学号" ><hr/><input placeholder="姓名" type="text">',
                title: '学号认证',
                subTitle: '',
                scope: $scope,
                buttons: [
                    { text: '取消' },
                    {
                        text: '<b>提交</b>',
                        type: 'button-balanced',
                        onTap: function(e) {
                            if (!$scope.data.wifi) {
                                //don't allow the user to close unless he enters wifi password
                                e.preventDefault();
                            } else {
                                return $scope.data.wifi;
                            }
                        }
                    },
                ]
            });
            myPopup.then(function(res) {
                console.log('Tapped!', res);
            });
            $timeout(function() {
                myPopup.close(); //close the popup after 3 seconds for some reason
            }, 3000000);
        };
        // 开发者阶段的调试方法
        $scope.publishBookmark= function() {
            var alertPopup = $ionicPopup.alert({
                title: '呜呜！',
                template: '您还没任何信息',
                buttons: [

                    {
                        text: '<b>确定</b>',
                        type: 'button-balanced',

                    },
                ]
            });

            alertPopup.then(function(res) {
                console.log('确定');
            });
        };


        //

    });