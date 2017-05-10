$(function () {
    var $container = $('.container');
    var $left_nav = $container.find('.nav');
    var $content = $container.find('.content');
    var $content_box = $container.find('.content_box');
    var $wrap = $container.find('.content_wrap');
    var $content_marked = $container.find('.docx_marked');
    var $loading = $container.find('.loading');
    var $menue = $container.find('.head_menue');
    var $slidebar = $container.find('.slidebar');
    
    var windowHeight = $(window).height();
    var location = window.location.origin;
    $wrap.css('minHeight', windowHeight - 80 + 'px');

    var setHtml = function (data) {
        var html = '';

        data.forEach(function (res) {
            html += '<li>';
            html += '<a href="' + (res.link ? res.link : '') + '"' + (res.link ? '' : ' class="nav_title"') + '>';
            html += res.title + (res.link ? '' : '<span class="fa arrow"></span>');
            html += '</a>';
            if (res.child) {
                html += '<ul class="sub_nav">';
                html += setHtml(res.child);
                html += '</ul>';
            }
            html += '</li>';
        });

        return html;
    };
    var htmllist = setHtml(data);
    $left_nav.html(htmllist);

    var setMd = function (name) {
        var defer = $.Deferred();
        if (xhr) {
            xhr.abort();
            xhr = null;
        }
        var xhr = $.ajax({
            url: 'api/get',
            timeout: 7000,
            data: {
                name: name
            },
            beforeSend: function () {
                $content_marked.html('');
                $loading.show();
            },
            success: function (res) {
                if (res && res.data) {
                    defer.resolve(res.data);
                }
            },
            error: function () {
                defer.reject();
            }
        });
        return defer.promise();
    };

    var setmd = function (file) {
        $.when(setMd(file)).then(function (res) {
            window.scrollTo(0,0);
            if ($content_box.hasClass('active')) {
                $content_box.removeClass('content_transition');
                $content_box.removeClass('active');
            }
            setTimeout(function () {
                $content_box.addClass('content_transition');
                $content_box.addClass('active');
            }, 20);
            $loading.hide();
            $content_marked.html(res);
        }, function () {
            defer.reject();
        });
    }

    $left_nav.on('click', 'a', function (event) {
        var $this = $(this);
        $left_nav.find('a').removeClass('focus');
        $(this).addClass('focus');
        if ($this.hasClass('nav_title')) {
            if ($this.next().hasClass('in')) {
                $(this).removeClass('active').next().removeClass('in');
            }
            else {
                $this.parent().siblings('li').find('.active').removeClass('active');
                $this.parent().siblings('li').find('.in').removeClass('in');
                $(this).addClass('active').next().addClass('in');
            }
        }
        else {
            var link = $this.attr('href');
            setmd(link);
            if ($slidebar.hasClass('slidebar_active')) {
                hideNav();
            }

            /*var url = location + link;
            var loca = window.location.href;
            window.history.pushState(loca, 'url', url);*/
        }

        event.stopPropagation();
        event.preventDefault();
    });

    /*$(window).on('popstate', function (e) {
        if (history.state) {
            setmd(window.location.pathname);
        }
    });*/

    setmd(defaultUrl);

    $menue.on('touchstart click', function (event) {
        var setFn = function () {
            if ($slidebar.hasClass('slidebar_active')) {
                hideNav();
            }
            else {
                setHeight($container, 'hidden', $(window).height());
                $slidebar.addClass('slidebar_active');
                setTimeout(function () {
                    $content.one('touchstart', function () {
                        if ($slidebar.hasClass('slidebar_active')) {
                            hideNav();
                        }
                    });
                });
            }
        };
        if (event.type === 'touchstart') {
            setFn();
            return false;
        }
        else {
            setFn();
        }
    });
    function hideNav() {
        setHeight($container, 'auto', 'auto');
        $slidebar.removeClass('slidebar_active');
    }
    function setHeight(obj, overflow, height) {
        obj.css({
            'overflow': overflow,
            'height': height
        });
    }
});
