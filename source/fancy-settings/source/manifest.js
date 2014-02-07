// SAMPLE
this.manifest = {
    "name": "BetterTweetDeck",
    "icon": "icon.png",
    "settings": [
        {
            "tab": "General",
            "group": "Info",
            "name": "informations",
            "type": "description",
            "text": "<strong>Don't forget to reload any TweetDeck tab after applying your settings</strong>"
        },
        {
            "tab": "General",
            "group": "Time formatting",
            "name": "timestamp",
            "type": "popupButton",
            "label": "Time should be:",
            "options": {
                "values": [
                    {
                        "value": "relative",
                        "text": "Relative (1m, 2h, 3d...)"
                    },
                    {
                        "value": "absolute",
                        "text": "Absolute (dd/mm/yy hh:mm)"
                    },
                    {
                        "value": "absolute_us",
                        "text": "Absolute 'US Style' (mm/dd/yy hh:mm)"
                    }
                ],
            },
        },
        {
            "tab":"General",
            "group":"Time formatting",
            "name":"full_after_24h",
            "type":"popupButton",
            "label":"Display full-time (dd/mm/yy hh:mm) only after 24h:",
            "options": {
                "values": [
                    {
                        "value": true,
                        "text": "Yes"
                    },
                    {
                        "value": false,
                        "text": "No"
                    }
                ]
            }
        },
        {
            "tab": "General",
            "group": "Users",
            "name": "name_display",
            "type": "popupButton",
            "label": "Display name/username as:",
            "options": {
                "values": [
                    {
                        "value": "both",
                        "text": "Full Name @username"
                    },
                    {
                        "value": "inverted",
                        "text": "@Username Full Name"
                    },
                    {
                        "value": "username",
                        "text": "Username only"
                    },
                    {
                        "value": "fullname",
                        "text": "Fullname only"
                    }
                ],
            },
        },
        {
            "tab": "General",
            "group": "Users",
            "name": "typeahead_display_username_only",
            "type": "popupButton",
            "label": "In the <a href='http://f.cl.ly/items/0Q0I1t2k441639363V35/BehaYurCUAATDU8.png'>mention helper</a> display the username only:",
            "options": {
                "values": [
                    {
                        "value": true,
                        "text": "Yes"
                    },
                    {
                        "value": false,
                        "text": "No"
                    }
                ],
            },
        },
        {
            "tab": "General",
            "group": "Users",
            "name": "circled_avatars",
            "type": "popupButton",
            "label": "Display rounded avatars (it's fancy!):",
            "options": {
                "values": [
                    {
                        "value": false,
                        "text": "No"
                    },
                    {
                        "value": true,
                        "text": "Yes"
                    }
                ],
            },
        },
        {
            "tab": "General",
            "group": "Appearance",
            "name": "reduced_padding",
            "type": "popupButton",
            "label": "Columns take less space :",
            "options": {
                "values": [
                    {
                        "value": false,
                        "text": "No"
                    },
                    {
                        "value": true,
                        "text": "Yes"
                    }
                ],
            },
        },
        {
            "tab": "General",
            "group": "Appearance",
            "name": "no_columns_icons",
            "type": "popupButton",
            "label": "Display icons in column headers :",
            "options": {
                "values": [
                    {
                        "value": true,
                        "text": "No"
                    },
                    {
                        "value": false,
                        "text": "Yes"
                    }
                ],
            },
        },
        {
            "tab": "General",
            "group": "Appearance",
            "name": "grayscale_notification_icons",
            "type": "popupButton",
            "label": "Icons in Notification column should be in grayscales:",
            "options": {
                "values": [
                    {
                        "value": true,
                        "text": "Yes"
                    },
                    {
                        "value": false,
                        "text": "No"
                    }
                ],
            },
        },
        {
            "tab": "General",
            "group": "Content",
            "name": "url_redirection",
            "type": "popupButton",
            "label": "Remove t.co redirection:",
            "options": {
                "values": [
                    {
                        "value": false,
                        "text": "No"
                    },
                    {
                        "value": true,
                        "text": "Yes"
                    }
                ],
            },
        },
        {
            "tab": "General",
            "group": "Content",
            "name": "img_preview",
            "type": "popupButton",
            "label": "Size of non-Twitter thumbnails displayed:",
            "options": {
                "values": [
                    {
                        "value": false,
                        "text": "No"
                    },
                    {
                        "value": "small",
                        "text": "Small"
                    },
                    {
                        "value": "medium",
                        "text": "Medium"
                    },
                    {
                        "value": "large",
                        "text": "Large"
                    }
                ],
            },
        },
        {
            "tab": "General",
            "group": "Content",
            "name": "img_preview_imgur",
            "type": "popupButton",
            "label": "Display previews from <b>Imgur</b>:",
            "options": {
                "values": [
                    {
                        "value": false,
                        "text": "No"
                    },
                    {
                        "value": true,
                        "text": "Yes"
                    }
                ],
            },
        },
        {
            "tab": "General",
            "group": "Content",
            "name": "img_preview_droplr",
            "type": "popupButton",
            "label": "Display previews from <b>Droplr</b>:",
            "options": {
                "values": [
                    {
                        "value": false,
                        "text": "No"
                    },
                    {
                        "value": true,
                        "text": "Yes"
                    }
                ],
            },
        },
        {
            "tab": "General",
            "group": "Content",
            "name": "img_preview_instagram",
            "type": "popupButton",
            "label": "Display previews from <b>Instagram</b>:",
            "options": {
                "values": [
                    {
                        "value": false,
                        "text": "No"
                    },
                    {
                        "value": true,
                        "text": "Yes"
                    }
                ],
            },
        },
        {
            "tab": "General",
            "group": "Content",
            "name": "img_preview_flickr",
            "type": "popupButton",
            "label": "Display previews from <b>Flickr</b>:",
            "options": {
                "values": [
                    {
                        "value": false,
                        "text": "No"
                    },
                    {
                        "value": true,
                        "text": "Yes"
                    }
                ],
            },
        },
        {
            "tab": "General",
            "group": "Content",
            "name": "img_preview_500px",
            "type": "popupButton",
            "label": "Display previews from <b>500px</b>:",
            "options": {
                "values": [
                    {
                        "value": false,
                        "text": "No"
                    },
                    {
                        "value": true,
                        "text": "Yes"
                    }
                ],
            },
        },
        {
            "tab": "General",
            "group": "Content",
            "name": "img_preview_cloud",
            "type": "popupButton",
            "label": "Display previews from <b>CloudApp</b>:",
            "options": {
                "values": [
                    {
                        "value": false,
                        "text": "No"
                    },
                    {
                        "value": true,
                        "text": "Yes"
                    }
                ],
            },
        },
        {
            "tab": "General",
            "group": "Content",
            "name": "yt_rm_button",
            "type": "popupButton",
            "label": "Hide play button on YouTube previews:",
            "options": {
                "values": [
                    {
                        "value": false,
                        "text": "No"
                    },
                    {
                        "value": true,
                        "text": "Yes"
                    }
                ]
            },
        },
        {
            "tab": "About",
            "group": "About",
            "name": "about",
            "type": "description",
            "text": "Thanks for using this extension ! This extension is free, but development takes time, so if you found it useful and want to help me you can give a little money or help me developing it !<ul><li><a href='https://github.com/eramdam/BetterTweetDeck'>BetterTweetDeck on Github</a></li><li><a href='http://twitter.com/Eramdam'>Follow me on Twitter !</a></li></ul>"
        },
        {
            "tab": "About",
            "group": "Donation",
            "name": "donate",
            "type": "description",
            "text": "<form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top'><input type='hidden' name='cmd' value='_s-xclick'><input type='hidden' name='hosted_button_id' value='RRY2KKZLNBJDG'><input type='image' src='https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif' border='0' name='submit' alt='PayPal - The safer, easier way to pay online!'><img alt='' border='0' src='https://www.paypalobjects.com/fr_FR/i/scr/pixel.gif' width='1' height='1'></form>"
        }
    ]
};
