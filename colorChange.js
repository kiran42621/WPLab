<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Color Change</title>
    <script type="tent/javascript">
        function changeBg(what, value){
            if(what == "BG"){
                document.body.style.backgroundColor = value;
            }
            else{
                document.body.style.Color = value;
            }
        }
    </script>
</head>
<body>
    <p>This is paragraph</p>
    <input type="text" onchange="changeBg('BG', this.value)"></input>
</body>
</html>