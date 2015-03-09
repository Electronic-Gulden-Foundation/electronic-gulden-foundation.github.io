'use strict';

angular.module('egulden.directives')

.directive('ngFooter', function() {
    return {
        templateUrl  : 'templates/partials/footer.html',
        controllerAs : 'footerCtrl',
        controller   : function($scope) {
            this.eguldenDonationAddress = 'LdCn2NRMpqeWXMMDWdeNs87mZz5tfhkTpZ';
            this.bitcoinDonationAddress = '1HMLhw9ZqPpLzE4BT7CaQxPx6Ghb9mhb3R';

            this.itemIsActive = function(item) {
                return (item.url == $location.path());
            };

            this.links = [
                {
                    text : 'Home',
                    url  : '/'
                },
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
                },
                {
                    title : 'More',
                    links : [
                        {
                            title : 'Coinmarketcap',
                            url   : 'http://coinmarketcap.com/currencies/electronic-gulden/'
                        },
                        {
                            title : 'Github',
                            url   : 'https://github.com/Electronic-Gulden-Foundation'
                        }
                    ]
                }
            ];
        }
    }
});
