module.exports = {


_exceptions: [],        // list of errors push onto array as they are encountered
_output: [],
_width: 0,              // dimensions of the map
_height: 0,
_roverx: 0,             // rover co-ordinates and orientation
_rovery: 0,
_rovero: null,


processInstructions: function(instructions)
{
    instructions = instructions.split("\n");

    for (var idx = 0; idx < instructions.length; idx++)
    {
        var instruction = instructions[idx].trim();
        if (!instruction) continue;

        var separated = instruction.split(" ");

        if (separated.length > 3) 
        {
            exceptions.push(`row ${idx} has incorrect number of spaces`);
            continue;
        }

        if (separated.length == 2) // this initializes the map
        {
            this.initmap(separated[0], separated[1]);
        }

        if (separated.length == 3) // this orientates the rover
        {
            if (!this.width || !this._height) this._exceptions.push(`Row ${idx} - Rover being placed on a map without valid dimensions`);
            this.placerover(separated[0], separated[1], separated[2]);
            
        }

        if (separated.length == 1) // this moves the rover
        {
            if (!this._rovero) this._exceptions.push(`Row ${idx} - Rover receives moving instructions before being placed`);
            this._output.push(this.moverover(idx, instruction));
        }
    }

},


initmap: function(width, height)
{
    this._width = parseInt(Math.abs(width));
    this._height = parseInt(Math.abs(height));
},



placerover: function(x, y, o)
{
    this._roverx = parseInt(x)
    this._rovery = parseInt(y);
    this._rovero = o;
},


moverover: function(idx, instruction)
{
    var truth = {
        0: 'N',
        90: 'E',
        180: 'S',
        270: 'W',

        'N': 0,
        'E': 90,
        'S': 180,
        'W': 270

    };

    for (var i = 0; i < instruction.length; i++)
    {
        var cmd = instruction[i];
        var deg = truth[this._rovero];

        if (cmd == 'L') deg -= 90; 
        if (cmd == 'R') deg += 90;

        if (deg < 0) deg = 270;
        if (deg > 270) deg = 0;

        this._rovero = truth[deg];

        if (cmd == 'M') 
        {

            if (this._rovero == 'N') 
            {
                this._rovery += 1;
            }
            else if (this._rovero == 'E')
            {
                this._roverx += 1;
            }
            else if (this._rovero == 'S')
            {
                this._rovery -= 1;
            }
            else if (this._rovero == 'W')
            {
                this._roverx -= 1;
            }
        }

        if (this._roverx < 0 || this._roverx >= this._width || this._rovery < 0 || this._rovery >= this._height)
        {
            this._exceptions.push(`Row ${idx} instruction ${instruction} moves rover outside the confines described by the map ${this._width} x ${this._height}`);
        }
    }

    return `${this._roverx} ${this._rovery} ${this._rovero}`;
}


}
