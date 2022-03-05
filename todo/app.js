<!DOCTYPE html>
<html lang="en">
<head>
<title>To Do App</title>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link rel="stylesheet" href="style.css"/>
<!-- Bootstrap CSS 
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
-->



</head>
<body>
    <header>
        <img id="logo" src="/bird.png"
        <h1 id="logoh1">To Do App</h1>
    </header>
    <nav id="navbar" class="navbar">
        <a id="home" href="http://www.google.com">Home</a>
        <a id="mygoals" href="http://www.google.com">My Goals</a>
        <a id="myforest" href="http://www.google.com">My Forest</a>
        <a id="contact" href="http://www.google.com">Contact</a>
    </nav>
        <section id="section-list">
            <h1 id="headone">Yapılacaklar Listesi</h1>
            <div class="list">
                <p id="todo">Javascript</p>
                <input type="checkbox" id="control-box"></input>
            </div>
        </section>
        <section id="section-add">
            <input id="input-add" type="text" placeholder="Add a new job"></input>
            <button type="button" name="add" onclick="Runningg()">Add</button>
        </section>
        

<script src="app.js"></script>
</body>
</html>
