'use strict';

angular.module('egulden.directives.partials', [])

.directive('ngHeader', function() {
    return {
        templateUrl  : 'templates/partials/header.html',
        controllerAs : 'headerCtrl',
        controller   : function($location) {
            this.itemIsActive = function(item) {
                return (item.url == $location.path());
            };

            this.links = [
                {
                    text : 'Wie zijn we',
                    url  : '/wiezijnwe'
                },
                {
                    text : 'Vrienden',
                    url  : '/vrienden'
                },
                {
                    text : 'Contact',
                    url  : '/contact'
                }
            ];
        }
    }
})

.directive('ngFooter', function() {
    return {
        templateUrl  : 'templates/partials/footer.html',
        controllerAs : 'footerCtrl',
        controller   : function() {
            this.eguldenDonationAddress = 'someEFLDonationAddress';
            this.bitcoinDonationAddress = 'someBTCDonationAddress';

            this.linkCols = [
                {
                    title : 'Chat',
                    links : [
                        {
                            title : 'Forum',
                            url   : 'http://forum.e-gulden.org/'
                        },
                        {
                            title : 'IRC',
                            url   : 'http://egulden.org/webchat.freenode.net/?channels=egulden'
                        },
                        {
                            title : 'BitcoinTalk',
                            url   : 'https://bitcointalk.org/index.php?topic=820336.0'
                        }
                    ]
                },
                {
                    title : 'Trade',
                    links : [
                        {
                            title : 'Crytpsy',
                            url   : 'https://www.cryptsy.com/markets/view/EFL_BTC'
                        },
                        {
                            title : 'Europex',
                            url   : 'http://europex.eu/#!coin/btc/efl'
                        }
                    ]
                }
            ];
        }
    }
});
