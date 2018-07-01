$(document).ready(function() {
    var user = "AtlassianPS";

    // if (data = JSON.parse(localStorage[id])) { // use cache
    //     console.debug("using cache for: " + id, data);
    //     // setRepoData("{{ forloop.index }}", data);
    // } else {
    //     $.get("https://api.github.com/users/" + id + "/repos?per_page=100", function(data) {
    //         localStorage[id] = JSON.stringify(data); // store cache
    //         // setRepoData("{{ forloop.index }}", data);
    //     });
    // }

    $.ajax({
        type: "GET",
        url: "https://api.github.com/users/" + user + "/repos?per_page=100",
        tryCount: 0,
        retryLimit: 3,
        async: !0,
        dataType: "json",
        success: function(data) {
            $.each(data, function(index, data) {
                let id = user + '/' + data.name;
                $("div.module.item[repo='" + data.name + "']").find(".html_url").attr("href", data.html_url);
                $("div.module.item[repo='" + data.name + "']").find(".item-description").html(data.description);
                $("div.module.item[repo='" + data.name + "']").find(".img.logo").attr("alt", data.name);
                $("div.module.item[repo='" + data.name + "']").find(".fork").html('<i class="fas fa-code-branch"></i> ' + data.forks_count);
                $("div.module.item[repo='" + data.name + "']").find(".star").html('<i class="fas fa-star"></i> ' + data.stargazers_count);
            });
        }
    }).done(function(data) {
        // if (console && console.log) {
        // console.log("Sample of data:", data.slice(0, 100));
        // }
    });
});
