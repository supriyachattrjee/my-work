function navbarstyle() {
  return `  
       #search {
        text-align: center;
        width: 40%;
      }
      #search > input {
        width: 60%;
        height: 40%;
        border-radius: 20px;
        font-size: 17px;
      }
      #search > button {
        width: 20%;
        height: 50%;
        background-color: transparent;
        border-radius: 10px;
        border: 1px soldi black;
      }
      #search > button:hover {
        cursor: pointer;
        background-color: bisque;
        font-size: 17px;
        border: none;
        font-weight: 700;
      }
          #nav {
        width: 95%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
      }
      #ytlogo {
        height: 50px;
        width: 50px;
        background-color: transparent;
      }
      #dp {
        height: 60%;
        width: 3%;
        border-radius: 50%;
      }
      #ytlgo {
        display: flex;
      }
      #ytlgo > h2 {
        margin-top: 10px;
      }
        #ytlgo:hover{
        cursor: pointer;
        }
        `;
}

export default navbarstyle;
