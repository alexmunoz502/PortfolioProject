
.section {
    display: block;
    margin: 0 auto;
    text - align: center;
}

.sub - section {
    margin: 50px;
    vertical - align: top;
    display: inline - block;
}

.dark - content - panel {
    color: #fff;
    background - color: #0F0F0F;
    box - shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 25px;
    height: 450px;
    width: 450px;
}

.mint {
    color: #3BBA9C;
}

#about - me > h1 {
    padding - right: 25px;
    text - align: right;
    color: white;
    font - size: 24px;
}

#about - me > p {
    padding - top: 15px;
    text - align: left;
}

#photo - frame {
    display: inline - block;
    background - color: black;
    box - shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 450px;
    height: 450px;
}

#photo - frame:: before {
    content: "";
    width: 450px;
    height: 450px;
    border: thin solid #3BBA9C;
    transform: translateX(-250px) translateY(-25px);
    box - shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    position: absolute;
    z - index: -1;
}

#featured - projects > h1 {
    color: white;
    text - align: left;
    padding - left: 25px;
}
