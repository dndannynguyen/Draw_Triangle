function DrawTriangle(n) {
    for (i=0; i<=n; i++) {
        row = ""
        for (k=0; k<i; k++) {
            row += "*"
        }
        console.log(row)
    }
}
DrawTriangle(45)