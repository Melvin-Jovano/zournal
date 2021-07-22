$(document).ready(() => {
    document.getElementById("searchInput").addEventListener("keyup", () => {
        var old_data = document.getElementById("api_data");
        var old_modal = document.getElementById("api_modal");
        old_data.remove();
        old_modal.remove();

        $("#noInternet").hide();
        $("#notFound").hide();
        toggleLoader();

        var input = $("#searchInput").val();
        var user = $("#userN").val();
        var fd = new FormData();
        fd.append("input", input);
        fd.append("user", user);
        fetch("https://melpinchan.000webhostapp.com/configBeta/search.php", {method:"POST", body:fd})
            .then(res => res.json())
            .then((data) => {
                $("#founds").html(data.data.length);
                toggleLoader();
                if (document.getElementById("api_data") || document.getElementById("api_modal")) {
                    async function erase() {
                        var old_data = document.getElementById("api_data");
                        var old_modal = document.getElementById("api_modal");
                        old_data.remove();
                        old_modal.remove();
                    }
                    erase().then(LoadData());
                } else {
                    LoadData();
                }

                if (data.data.length == 0 || data.data.length == "0") {
                    $("#notFound").show();
                } else {
                    $("#notFound").hide();
                }

                function LoadData() {
                    var api_data_container = document.createElement("div");
                    api_data_container.setAttribute("id", "api_data");

                    var api_modal_container = document.createElement("div");
                    api_modal_container.setAttribute("id", "api_modal");

                    var api_container = document.getElementById("api-container");
                    api_container.appendChild(api_data_container);
                    api_container.appendChild(api_modal_container);

                    var api_data = document.getElementById("api_data");
                    var api_modal = document.getElementById("api_modal");

                    for (var i = 0; i < data.data.length; i++) {
                        // Cards
                        var div_col = document.createElement("div");
                        div_col.setAttribute("class", "col s12 m12 l12 xl12");

                        var div_card = document.createElement("div");
                        div_card.setAttribute("class", "card center z-depth-4");

                        var div_card_img = document.createElement("div");
                        div_card_img.setAttribute("class", "card-image");

                        var card_img = document.createElement("img");
                        card_img.setAttribute("class", "responsive-img materialboxed");
                        card_img.setAttribute("src", "https://melpinchan.000webhostapp.com/configBeta/img/" + data.data[i].img);

                        var div_card_content = document.createElement("div");
                        div_card_content.setAttribute("class", "card-content center");

                        var div_card_content_title = document.createElement("p");
                        div_card_content_title.setAttribute("id", "bold");
                        div_card_content_title.innerHTML = data.data[i].title;

                        var div_divider = document.createElement("div");
                        div_divider.setAttribute("class", "divider");

                        var div_card_content_name = document.createElement("p");
                        div_card_content_name.setAttribute("id", "italic");
                        div_card_content_name.innerHTML = data.data[i].name;

                        var div_card_content_date = document.createElement("p");
                        div_card_content_date.setAttribute("class", "date");
                        div_card_content_date.innerHTML = data.data[i].date;

                        var div_card_a = document.createElement("a");
                        div_card_a.setAttribute("href", "#modals" + data.data[i].id);
                        div_card_a.setAttribute("class", "modal-trigger");

                        var div_card_a_btn = document.createElement("div");
                        div_card_a_btn.setAttribute("class", "btn-floating scale2 z-depth-2 red");

                        var br4 = document.createElement("br");

                        var div_card_a_btn_icon = document.createElement("i");
                        div_card_a_btn_icon.setAttribute("class", "material-icons large");
                        div_card_a_btn_icon.innerHTML = "zoom_in";

                        var div_card_b_btn = document.createElement("div");
                        div_card_b_btn.setAttribute("class", "btn-floating scale2 z-depth-2 red");

                        var div_card_b_btn_icon = document.createElement("i");
                        div_card_b_btn_icon.setAttribute("class", "material-icons large");
                        div_card_b_btn_icon.innerHTML = "delete";

                        var onclick = document.createAttribute("onclick");
                        onclick.value = "deleteData("+data.data[i].id+")";

                        var div_card_c_btn = document.createElement("div");
                        div_card_c_btn.setAttribute("class", "btn-floating scale2 z-depth-2 red");

                        var div_card_c_btn_icon = document.createElement("i");
                        div_card_c_btn_icon.setAttribute("class", "material-icons large");
                        div_card_c_btn_icon.innerHTML = "brush";

                        var onclickU = document.createAttribute("onclick");
                        onclickU.value = "updt("+data.data[i].id+")";

                        div_col.appendChild(div_card);
                        api_data.appendChild(div_col);
                        div_card_img.appendChild(card_img);
                        div_card.appendChild(div_card_img);
                        div_card.appendChild(div_card_content);
                        div_card_content.appendChild(div_card_content_title);
                        div_card_content.appendChild(div_divider);
                        div_card_content.appendChild(div_card_content_name);
                        div_card_content.appendChild(div_card_content_date);
                        div_card_content.appendChild(br4);
                        div_card.appendChild(div_card_c_btn);
                        div_card_c_btn.setAttributeNode(onclickU);
                        div_card_c_btn.appendChild(div_card_c_btn_icon);
                        div_card.appendChild(div_card_a);
                        div_card_a.appendChild(div_card_a_btn);
                        div_card_a_btn.appendChild(div_card_a_btn_icon);
                        div_card.appendChild(div_card_b_btn);
                        div_card_b_btn.setAttributeNode(onclick);
                        div_card_b_btn.appendChild(div_card_b_btn_icon);
                        // Cards

                        // Modals
                        var modal = document.createElement("div");
                        modal.setAttribute("class", "modal");
                        modal.setAttribute("id", "modals" + data.data[i].id);

                        var modal_content = document.createElement("div");
                        modal_content.setAttribute("class", "modal-content");

                        var container_modal = document.createElement("div");
                        container_modal.setAttribute("class", "container row valign-wrapper");

                        var first_col = document.createElement("div");
                        first_col.setAttribute("class", "col s6");

                        var first_col_img = document.createElement("img");
                        first_col_img.setAttribute("class", "responsive-img img-modal img-table");
                        first_col_img.setAttribute("src", "https://melpinchan.000webhostapp.com/configBeta/img/" + data.data[i].img);

                        var second_col = document.createElement("div");
                        second_col.setAttribute("class", "col s6");

                        var ul = document.createElement("ul");

                        var li_writer = document.createElement("li");
                        li_writer.setAttribute("class", "date");
                        li_writer.innerHTML = "Author :";

                        var li_label_writer = document.createElement("li");
                        li_label_writer.setAttribute("class", "label-author");
                        li_label_writer.innerHTML = data.data[i].name;

                        var br1 = document.createElement("br");

                        var li_title = document.createElement("li");
                        li_title.setAttribute("class", "date");
                        li_title.innerHTML = "Title :";

                        var li_label_title = document.createElement("li");
                        li_label_title.setAttribute("class", "label-author");
                        li_label_title.innerHTML = data.data[i].title;

                        var br2 = document.createElement("br");

                        var li_date = document.createElement("li");
                        li_date.setAttribute("class", "date");
                        li_date.innerHTML = "Date :";

                        var li_label_date = document.createElement("li");
                        li_label_date.setAttribute("class", "label-author");
                        li_label_date.innerHTML = data.data[i].date;

                        var divider_modal = document.createElement("div");
                        divider_modal.setAttribute("class", "divider");

                        var messages = document.createElement("p");
                        messages.setAttribute("class", "messages container");
                        messages.innerHTML = note(data.data[i].note);

                        api_modal.appendChild(modal);
                        modal.appendChild(modal_content);
                        modal_content.appendChild(container_modal);
                        container_modal.appendChild(first_col);
                        first_col.appendChild(first_col_img);
                        container_modal.appendChild(second_col);
                        second_col.appendChild(ul);
                        ul.appendChild(li_writer);
                        ul.appendChild(li_label_writer);
                        ul.appendChild(br1);
                        ul.appendChild(li_title);
                        ul.appendChild(li_label_title);
                        ul.appendChild(br2);
                        ul.appendChild(li_date);
                        ul.appendChild(li_label_date);
                        modal_content.appendChild(divider_modal);
                        modal_content.appendChild(messages);
                        // Modals

                        $(".materialboxed").materialbox();
                        $(".modal").modal();
                        $(".modal-trigger").modal();

                    }

                    function note(params) {
                        if (params == "") {
                            return "<center>* No Message *</center>";
                        } else {
                            return params;
                        }
                    }
                }
            })
            .catch((err) => {
                toggleLoader();
                $("#noInternet").show();
            });
        
    })
});

    