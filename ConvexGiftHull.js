
class Point{
    constructor(x, y){
        this.x=x;
        this.y=y;
    }
    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }
    toString(){
        return ("("+(Math.round( this.x * 10 ) / 10)+", "+(Math.round( this.y * 10 ) / 10)+")");
    }
}

function orientation(p, q, r) 
    {
        var val = (q.getY() - p.getY()) * (r.getX() - q.getX()) - 
        (q.getX() - p.getX()) * (r.getY() - q.getY()); 
       
        if (val == 0.0){
            return 0;
        }   // collinear 
        return (val > 0.0)? 1: 2; // clock or counterclock wise 
}

class $convexHull{
	constructor (points){
        this.points=points; 
    }
    
    convexHull()
    {
        
        var n = this.points.length;
        
        if (n < 3) return; 
        else{
            var hull = [];
            
             // Find the starting(furthest left) point 
            var l = 0;
            
            var i;
            for (i = 0; i < n; i++) {
                
        	    if (this.points[i].getX() < this.points[l].getX()){
                    l = i;
                    
                }                	
            }
            
            var q;
            var p = l, q;
            
            do {
                // Add current point to result
                
                hull.push(this.points[p]);
                
                q = (p + 1) % n;
                 
                for (i = 0; i < n; i++) 
                { 
                //draw a line to the point

                // If i is more counterclockwise than  
                 // current q, then update q 
                if (orientation(this.points[p], this.points[i], this.points[q])== 2){
                    q = i;
                    //doesn't erase previous line
                }
               

               //else, erase the line
                   
            } 
       
            // Now q is the most counterclockwise with 
            // respect to p. Set p as q for next iteration,  
            // so that q is added to result 'hull' 
            p = q; 
        } while (p != l);
        
        return hull;
        }
        
    }
	
	
      
   

    
}



