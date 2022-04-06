package com.example;
public class TicTacToeBoard {
    String boardstate;
    TicTacToeBoard(String boardstate) {
        this.boardstate = boardstate.toLowerCase();

    }
    public Evaluation evaluate() {
        if(boardstate.length()!=9){
            return Evaluation.InvalidInput;
        }
        int countx=0;
        int counto=0;
        for(int i=0;i<boardstate.length();i++)
        {
            if(boardstate.charAt(i)=='x') {
                countx++;
            }
            if(boardstate.charAt(i) =='o'){
                counto++;

            }
        }
        if(Math.abs(countx -counto) >=2){
            return Evaluation.UnreachableState;
        }
        boolean xwins = winCondition('x',boardstate);
        boolean owins = winCondition('o',boardstate);
        if((xwins)&& (owins)){
            return Evaluation.UnreachableState;
        }
        if(xwins) {
            return Evaluation.Xwins;
        }
        else if(owins){
            return Evaluation.Owins;
        }
        else{
            return Evaluation.NoWinner;
        }
    }
    public static boolean winCondition(char checker, String boardState)
    {
        if((boardState.charAt(0)==checker) && (boardState.charAt(1)==checker) && (boardState.charAt(2)==checker)) {
            return (true);
        }
        if((boardState.charAt(3)==checker) && (boardState.charAt(4)==checker) && (boardState.charAt(5)==checker)) {
            return (true);
        }
        if((boardState.charAt(6)==checker) && (boardState.charAt(7)==checker) && (boardState.charAt(8)==checker)){
            return (true);
        }
        if((boardState.charAt(0)==checker) && (boardState.charAt(3)==checker) && (boardState.charAt(6)==checker)) {
            return (true);
        }
        if((boardState.charAt(1)==checker) && (boardState.charAt(4)==checker) && (boardState.charAt(7)==checker)) {
            return (true);
        }
        if((boardState.charAt(2)==checker) && (boardState.charAt(5)==checker) && (boardState.charAt(8)==checker)) {
            return (true);
        }
        if((boardState.charAt(0)==checker) && (boardState.charAt(4)==checker) && (boardState.charAt(8)==checker)) {
            return (true);
        }
        if((boardState.charAt(2)==checker) && (boardState.charAt(4)==checker) && (boardState.charAt(5)==checker)) {
            return (true);
        }
        return(boardState.charAt(2)== checker) && (boardState.charAt(4)== checker) && (boardState.charAt(6)== checker);

    }
    public static void main(String args[])
    {
        TicTacToeBoard tic =new TicTacToeBoard("x...x.oox");
        System.out.println(tic.evaluate());


    }

}



