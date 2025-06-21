import Image from 'next/image';
import ImgPerfil from '../public/image/perfil.png';


export function Bio() {
    return (
        <section className="relative w-full text-white px-4 mt-10 md:mt-0">
            <div className="flex flex-col md:flex-row">
                {/* Lado Esquerdo - Imagem */}
                <div className="w-full md:w-1/2 flex justify-start items-start">
                    <Image
                        src={ImgPerfil}
                        alt="Foto de perfil"
                        width={400}
                        height={500}
                        className="w-full max-w-[400px] h-[500px] border-2 border-green-500 object-cover"
                        priority
                    />
                </div>

                {/* Lado Direito - Conteúdo */}
                <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col justify-start">

                    {/* Biografia */}
                    <div className="border-t-2 border-green-500 pt-4 flex flex-col md:flex-row">
                        <h2 className="text-[14px] font-bold uppercase md:m-0 w-full my-4  md:w-[500px]">Biografia</h2>
                        <p className="text-sm leading-relaxed w-full md:w-[800px]">
                            Contadora de histórias criativa por natureza, crio obras-primas visuais para marcas de todos os tamanhos.
                            De startups a empresas estabelecidas, ajudo a transformar suas visões em realidade por meio do design estratégico.
                            Ao longo dos anos, trabalhei com clientes de diversos setores, criando designs que inspiram, envolvem e geram resultados.
                        </p>
                    </div>

                    {/* Especialidade */}
                    <div className="border-t-2 border-green-500 pt-4 mt-[100px] flex flex-col md:flex-row">
                        <h3 className="text-[14px] font-bold uppercase w-full my-4 md:m-0 md:w-[300px]">Minha <br className='hidden md:block' /> especialidade</h3>
                        <div className="w-full md:w-[500px]">
                            <p className="text-sm mb-2">
                                Sou uma designer gráfica experiente e meu coração pertence a estas áreas:
                            </p>
                            <ul className="text-sm list-none space-y-1 pl-4">
                                <li>• Identidade de marca</li>
                                <li>• Design digital</li>
                                <li>• Design impresso</li>
                                <li>• Ilustração</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
}