export class Tag{

    static readonly ANGULAR = new Tag ('Angular','#B45541');
    static readonly HTML = new Tag ('HTML5','#BCB147');
    static readonly CSS = new Tag ('CSS3','#95C638');
    static readonly PYTHON = new Tag ('PYTHON','#29A638');
    static readonly CSHARP = new Tag ('C#','#3D5AAD');
    static readonly NODEJS = new Tag ('NODE.JS','#7E5DD5');
    static readonly ASPNET = new Tag ('ASP.NET','#9D57C8');
    static readonly JAVASCRIPT = new Tag ('JAVASCRIPT','#AF5596');
    static readonly JAVA = new Tag ('JAVA','#1984A0');
    static readonly TYPESCRIPT = new Tag ('TypeScript','#0A6A05');
    static readonly SQL = new Tag ('SQL','#0D5378');
    static readonly DJANGO = new Tag ('DJANGO','#D48935');
    static readonly BOOST = new Tag ('BOOTSTRAP','#E85519');
    static readonly GIT = new Tag ('GIT','#024642');
    
    private constructor(private readonly key: string, public readonly color:string){

    }
    toString(){
        return this.key;
    }
}