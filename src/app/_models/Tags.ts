export class Tag{

    static readonly ANGULAR = new Tag ('Angular','blue');
    static readonly HTML = new Tag ('HTML5','red');
    static readonly CSS = new Tag ('CSS3','green');
    static readonly PYTHON = new Tag ('Python','pink');
    static readonly CSHARP = new Tag ('CSHARP','orange');
    static readonly NODEJS = new Tag ('node.JS','brown');
    static readonly ASPNET = new Tag ('ASP.NET','purple');
    static readonly JAVASCRIPT = new Tag ('JavaScript','blue');
    static readonly JAVA = new Tag ('Java','red');
    static readonly TYPESCRIPT = new Tag ('TypeScript','pink');
    static readonly SQL = new Tag ('SQL','pink');
    static readonly DJANGO = new Tag ('DJANGO','blue');
    
    private constructor(private readonly key: string, public readonly color:string){

    }
    toString(){
        return this.key;
    }
}