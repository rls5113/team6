$(document).ready(function () {

    $(".sbmt-btn").on("click", function (event) {
        event.preventDefault();

        // function makeAjaxCall() {
        var qryURL = "http://data.tmsapi.com/v1.1/movies/showings?startDate=2019-03-20&zip=37076&api_key=xw86j6eejrw4z8npzsxjwexx";
        console.log(qryURL);

        $.ajax({
            url: qryURL,
            method: "GET"
        }).then(function (response) {
            // $("results").text(JSON.stringify(response));
            console.log(response);   
            

            var table = $("#t1");

            for (var i = 0; i < 10; i++) {
                var rT = response[i].runTime;
                var rT = rT.substr(2);
                // console.log(rT);
                var ratings = response[i].ratings[0].code;
                var rating = "Not Rated"
                if (ratings == null) {
                    ratings = rating
                };
                // console.log(ratings);


                table.append(
                    `<tr>
                    <th scope="row">${response[i].title}</th>
                    <td>${ratings}</td>
                    <td>${rT}</td>
                    <td>${response[i].genres}</td>
                    <td> INSERT SHOWTIMES HERE</td>
                    </tr>`
            )};
        });


    })
});