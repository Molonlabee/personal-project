<select onChange={this.handleChange} name='games'>
<option value={this.displayGame()}>Games</option>
</select> 
/////////////////////////////////
<li>{this.displayGame()}</li>
<li>{this.displayTV()}</li>
<li>{this.displayMusic()}</li>
<li>{this.displayBooks()}</li>
<li>{this.displayPhotos()}</li>
//////////////////////////////////
<select onChange={this.handleChange} name="post">
<option value={1}>GAMES</option>
<option value={2}>TV</option>
<option value={3}>MUSIC</option>
<option value={4}>BOOKS</option>
<option value={5}>PHOTOS</option>
</select>
<button>Delete</button>
<button>Add</button>
//////////////////////////////////////
<body>
<title>Card Title</title>
<textarea style={{ width: '10rem', height:'9rem' }} >
BAT IS BACK. BAT IS BACK. BAT IS BACK. BAT IS BACK. BAT IS BACK.
BAT IS BACK. BAT IS BACK. BAT IS BACK. BAT IS BACK. BAT IS BACK.
</textarea>
<button>POST</button>
<button>DELETE</button>
</body>
//////////////////////////////////
<section className='right'>
     <img style={{ width: '10rem', height:'12rem' }} src="{}" />
</section>
