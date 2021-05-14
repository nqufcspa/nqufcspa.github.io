Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[Reitoria] 17 Realizar sindicância investigativa","publishDate":"14/05/2021 15:00:00","pages":[{"id":"c13b408d-5d57-4fb7-8070-a9479c4a661a","name":"[Reitoria] 17 Realizar sindicância investigativa","version":"1.0","author":"mbort","image":"files\\diagrams\\Reitoria]_17_Realizar_sindicancia_investigativa.png","isSubprocessPage":false,"elements":[{"id":"c366c91b-1386-4eb8-a307-eeb4ecf0ee28","name":"[Reitoria] 17 Realizar Sindicância Investigativa","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":2146.00024,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"cdd076bf-5b15-4d60-9c9f-9691f0c12678","name":"Nenhum início","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Reitor recebe den&uacute;ncia ou verifica necessidade de investiga&ccedil;&atilde;o de of&iacute;cio.</span></p>","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":114.0,"y":140.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"d5d211cf-fff2-477e-a6b8-cd788092bdf1","name":"Identificar necessidade de abertura de sindicância investigativa","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":194.0,"y":104.0}],"radius":0.0,"height":103.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7472ca81-ec40-4c25-92c2-dafa3d292301","name":"Investigação será realizada em decorrência de denúncia recebida?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":354.0,"y":135.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"8fa267dd-89b4-4377-ac68-738758b0308e","name":"Abrir processo de sindicância investigativa (SINVE)","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":477.0,"y":117.5}],"radius":0.0,"height":77.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b99c4150-0eb0-4e11-b323-dc8e53714a7d","name":"Incluir documento 011 - Ofício","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":476.5,"y":292.0}],"radius":0.0,"height":71.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"64ff494e-12ee-4c00-be62-61ed1148f750","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":326.0,"y":242.0}],"radius":0.0,"height":71.0,"width":96.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"81ffa347-98c6-4b4d-91a8-0054f6787682","name":"Alterar o tipo de processo recebido para processo de sindicância investigativa (SINVE)","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":322.0,"y":353.0}],"radius":0.0,"height":98.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7a28e4b4-d5b7-4f43-944f-5e7ee61b0723","name":"Incluir documento 963 - Portaria PAD e sindicâncias","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":321.0,"y":495.0}],"radius":0.0,"height":63.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ffbe9864-f220-4dcd-8756-ef8c1be48c60","name":"Comunicar Comitê Gestor do SEI para criação de unidade","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":317.5,"y":619.0}],"radius":0.0,"height":61.0,"width":115.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1435e7d1-372f-4bed-9b7b-707a86bb67c4","name":"[CGSEI] 01 Cadastrar novas unidades no SEI","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":329.0,"y":1891.7}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://nqi.ufcspa.edu.br/wiki/processos/CGSEI/%5bCGSEI%5d%2001%20Cadastrar%20novas%20unidades%20no%20SEI/#list","type":"url"}},{"id":"6e36a61c-8b77-4632-988e-8bab58c5a20b","name":"Enviar processo para a unidade criada","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":612.0,"y":625.0}],"radius":0.0,"height":72.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5bf02286-80d9-4b1a-b48d-a3772c1d4c70","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":803.0,"y":905.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"aa599c52-fa88-45ba-a76d-6bc2dfc5cec2","name":"Examinar  as informações e provas existentes","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":767.5,"y":1042.0}],"radius":0.0,"height":60.0,"width":113.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"64bc80ae-85c6-4a5d-a04b-bdd55e6045b7","name":"Instruir processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":779.0,"y":1184.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e64908ea-c481-442d-a4bf-353308d65a46","name":"Incluir documento 159 - Relatório","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1210.0,"y":1041.0}],"radius":0.0,"height":60.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fce99675-a570-4659-b718-59cf9943c5ad","name":"[Reitoria] 16 Auxiliar trabalhos de comissões investigativas ou disciplinares","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":968.0,"y":895.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[]},{"id":"db1a25ba-07ab-43cd-9016-5f02742ecfb9","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":1242.5,"y":905.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"610375d3-c9ed-4553-bc6e-3bcacb3dd727","name":"Anexar processo auxiliar","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1365.5,"y":895.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"770a6a6d-455c-41f1-8a56-daa3805e499e","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1355.0,"y":574.0}],"radius":0.0,"height":75.0,"width":111.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e52e8211-3ec5-414e-bcd1-951a703c5d10","name":"Incluir documento 056 - Parecer procuradoria","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1662.5,"y":1494.0}],"radius":0.0,"height":70.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"cd648776-f563-4c28-9e50-51ded3b3e742","name":"Analisar parecer e o relatório e determinar providências ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1655.0,"y":257.0}],"radius":0.0,"height":68.0,"width":114.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"56f12bd9-74f3-40a3-9d57-b6306b06388b","name":"Comunicar Comitê Gestor do SEI para excluir a unidade","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1655.0,"y":159.0}],"radius":0.0,"height":61.0,"width":115.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8b5c9e81-0216-4394-9a12-401e046a1600","name":"Incluir documento 860 - Despacho","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1659.0,"y":64.0}],"radius":0.0,"height":62.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e52af3d8-4617-463a-bbe0-a3ea4976e4cc","name":"Será dada continuidade ao processo?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1834.0,"y":75.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"b2a0e387-5199-4fb8-b146-c2accc997f1a","name":"Tipo de decisão tomada?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":2052.0,"y":75.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Instaurar PAD rito ordinário","elementType":"SequenceFlow","properties":[]},{"name":"Instaurar PAD rito sumário","elementType":"SequenceFlow","properties":[]},{"name":"Propor termo de ajustamento de conduta","elementType":"SequenceFlow","properties":[]}]},{"id":"3022830b-9879-4917-ad61-fcba9aa11f84","name":"Solicitar ao Comitê Gestor do SEI a criação da unidade TAC","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2021.0,"y":519.0}],"radius":0.0,"height":80.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"15e5fd22-94ec-4206-a70d-90889b0ae3a0","name":"[CGSEI] 01 Cadastrar novas unidades no SEI","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":2027.5,"y":1915.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://nqi.ufcspa.edu.br/wiki/processos/CGSEI/%5bCGSEI%5d%2001%20Cadastrar%20novas%20unidades%20no%20SEI/#list","type":"url"}},{"id":"f242b228-1bb8-4ece-9a9c-9f699192f277","name":"Incluir documento 318 - Termo de ajustamento de conduta ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2161.0,"y":520.0}],"radius":0.0,"height":84.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0663324e-1b24-456d-8f74-83d82ee415ca","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":2373.0,"y":1699.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"e68fc14d-9998-456a-969e-adbd9f63e394","name":"Enviar cópia do TAC à chefia imediata do servidor e ao DAP","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2336.0,"y":508.0}],"radius":0.0,"height":82.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"94b8a820-3982-4788-bbcf-ee641cf53f03","name":"[Reitoria] 13 Apurar infração disciplinar em rito ordinário","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":2747.0,"y":305.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/Reitoria/Reitoria%2013%20Apurar%20infracao%20disciplinar%20em%20rito%20ordinario/#list","type":"url"}},{"id":"9c0d2b72-9e5c-4f05-9d65-6c448d562018","name":"[Reitoria] 15 Apurar infração disciplinar em rito sumário","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":2487.0,"y":304.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[]},{"id":"c7c2a1d9-025e-4f31-9aa9-2b9f910f69f5","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":2640.0,"y":460.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"cb56998f-30c6-4645-9fd9-12668596a142","name":"Realizar tratamento arquivístico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2748.0,"y":2078.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7583242b-268a-44de-a185-3edebdddb0e8","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":2874.0,"y":2093.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"c6e467b8-e5e2-4981-83bc-01ba68dad6b7","name":"Reitoria/APS","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":756.3,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"c4c0d2bf-04a4-4b13-a6af-cd1c4eb1aa83","name":"Servidor/Comissão de Sindicância Investigativa (CSINVE)","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":776.3}],"radius":0.0,"height":660.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"848ecc8f-081b-43a7-ae88-b04e55eb83d9","name":"PFUFCSPA","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1436.3}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"28c2f7ea-b1fb-42aa-90f4-66acb4d04dcb","name":"Servidor compromissário","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1636.3}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"5edb9c6b-1bce-41a7-8dd4-6872f53f57e6","name":"CGSEI","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1836.3}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"c73d9523-f4c3-4ddb-b085-ea345f4eb591","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":2036.3}],"radius":0.0,"height":129.7002,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"c13b408d-5d57-4fb7-8070-a9479c4a661a","containerName":"[Reitoria] 17 Realizar sindicância investigativa","isSubprocess":false,"elements":[{"id":"c366c91b-1386-4eb8-a307-eeb4ecf0ee28","value":"[Reitoria] 17 Realizar Sindicância Investigativa"},{"id":"c6e467b8-e5e2-4981-83bc-01ba68dad6b7","value":"Reitoria/APS"},{"id":"c4c0d2bf-04a4-4b13-a6af-cd1c4eb1aa83","value":"Servidor/Comissão de Sindicância Investigativa (CSINVE)"},{"id":"848ecc8f-081b-43a7-ae88-b04e55eb83d9","value":"PFUFCSPA"},{"id":"28c2f7ea-b1fb-42aa-90f4-66acb4d04dcb","value":"Servidor compromissário"},{"id":"5edb9c6b-1bce-41a7-8dd4-6872f53f57e6","value":"CGSEI"},{"id":"c73d9523-f4c3-4ddb-b085-ea345f4eb591","value":"DIARQ"},{"id":"cd648776-f563-4c28-9e50-51ded3b3e742","value":"Analisar parecer e o relatório e determinar providências "},{"id":"8b5c9e81-0216-4394-9a12-401e046a1600","value":"Incluir documento 860 - Despacho"},{"id":"e52af3d8-4617-463a-bbe0-a3ea4976e4cc","value":"Será dada continuidade ao processo?"},{"id":"56f12bd9-74f3-40a3-9d57-b6306b06388b","value":"Comunicar Comitê Gestor do SEI para excluir a unidade"},{"id":"b2a0e387-5199-4fb8-b146-c2accc997f1a","value":"Tipo de decisão tomada?"},{"id":"cb56998f-30c6-4645-9fd9-12668596a142","value":"Realizar tratamento arquivístico"},{"id":"7583242b-268a-44de-a185-3edebdddb0e8","value":""},{"id":"94b8a820-3982-4788-bbcf-ee641cf53f03","value":"[Reitoria] 13 Apurar infração disciplinar em rito ordinário"},{"id":"9c0d2b72-9e5c-4f05-9d65-6c448d562018","value":"[Reitoria] 15 Apurar infração disciplinar em rito sumário"},{"id":"fce99675-a570-4659-b718-59cf9943c5ad","value":"[Reitoria] 16 Auxiliar trabalhos de comissões investigativas ou disciplinares"},{"id":"5bf02286-80d9-4b1a-b48d-a3772c1d4c70","value":""},{"id":"db1a25ba-07ab-43cd-9016-5f02742ecfb9","value":""},{"id":"64bc80ae-85c6-4a5d-a04b-bdd55e6045b7","value":"Instruir processo"},{"id":"aa599c52-fa88-45ba-a76d-6bc2dfc5cec2","value":"Examinar  as informações e provas existentes"},{"id":"e64908ea-c481-442d-a4bf-353308d65a46","value":"Incluir documento 159 - Relatório"},{"id":"81ffa347-98c6-4b4d-91a8-0054f6787682","value":"Alterar o tipo de processo recebido para processo de sindicância investigativa (SINVE)"},{"id":"8fa267dd-89b4-4377-ac68-738758b0308e","value":"Abrir processo de sindicância investigativa (SINVE)"},{"id":"7a28e4b4-d5b7-4f43-944f-5e7ee61b0723","value":"Incluir documento 963 - Portaria PAD e sindicâncias"},{"id":"ffbe9864-f220-4dcd-8756-ef8c1be48c60","value":"Comunicar Comitê Gestor do SEI para criação de unidade"},{"id":"7472ca81-ec40-4c25-92c2-dafa3d292301","value":"Investigação será realizada em decorrência de denúncia recebida?"},{"id":"cdd076bf-5b15-4d60-9c9f-9691f0c12678","value":""},{"id":"d5d211cf-fff2-477e-a6b8-cd788092bdf1","value":"Identificar necessidade de abertura de sindicância investigativa"},{"id":"b99c4150-0eb0-4e11-b323-dc8e53714a7d","value":"Incluir documento 011 - Ofício"},{"id":"610375d3-c9ed-4553-bc6e-3bcacb3dd727","value":"Anexar processo auxiliar"},{"id":"6e36a61c-8b77-4632-988e-8bab58c5a20b","value":"Enviar processo para a unidade criada"},{"id":"1435e7d1-372f-4bed-9b7b-707a86bb67c4","value":"[CGSEI] 01 Cadastrar novas unidades no SEI"},{"id":"770a6a6d-455c-41f1-8a56-daa3805e499e","value":"Incluir documento 872 - Despacho simples"},{"id":"e52e8211-3ec5-414e-bcd1-951a703c5d10","value":"Incluir documento 056 - Parecer procuradoria"},{"id":"f242b228-1bb8-4ece-9a9c-9f699192f277","value":"Incluir documento 318 - Termo de ajustamento de conduta "},{"id":"3022830b-9879-4917-ad61-fcba9aa11f84","value":"Solicitar ao Comitê Gestor do SEI a criação da unidade TAC"},{"id":"15e5fd22-94ec-4206-a70d-90889b0ae3a0","value":"[CGSEI] 01 Cadastrar novas unidades no SEI"},{"id":"0663324e-1b24-456d-8f74-83d82ee415ca","value":"Assinar documento em bloco"},{"id":"e68fc14d-9998-456a-969e-adbd9f63e394","value":"Enviar cópia do TAC à chefia imediata do servidor e ao DAP"},{"id":"64ff494e-12ee-4c00-be62-61ed1148f750","value":"Incluir documento 872 - Despacho simples"},{"id":"c7c2a1d9-025e-4f31-9aa9-2b9f910f69f5","value":""},{"id":"b215454e-a8d6-4d2b-b8b5-f54ba5f8b810"},{"id":"833e35cb-7171-408f-9ced-7796c99c6abb"},{"id":"1c8b3445-d6b9-4370-8408-ed27656c0928"},{"id":"57d42163-ce0d-4167-8f14-f667a6a4cf45"},{"id":"e05a05fc-062f-4c5b-933f-2ef367ae1548"},{"id":"f6bc5c6c-059e-436c-b59d-b8d1b33e0216"},{"id":"3e47db47-8aea-4ea9-a9c4-d55b95f2af52"},{"id":"060fcbfd-966f-45a4-8811-f0f048c41c09"},{"id":"17a79a82-0d16-43e2-8114-a60bf6a306e6"},{"id":"990741be-4fce-4a52-a7a1-672a2583622b"},{"id":"e9511860-7d41-4656-8c6c-32f72fae322b"},{"id":"d3b51d04-933d-463d-94de-0ec32853fab6"},{"id":"25b7f0fc-2b3c-4d7f-b6ad-0a928f66ceef"},{"id":"f7c92bba-bfbb-46d8-9b1d-2f26976a02a2"},{"id":"ddb624ca-9f82-402b-b27c-90ab08575e93"},{"id":"5ee3d2cf-4d07-4e27-af50-585b3ba6835e"},{"id":"4cea91c5-1858-4b28-81dc-bd4c0ac921de"},{"id":"30ee504c-dea2-45a6-bf5f-a049da779ea0"},{"id":"bc080632-c56c-4e93-8d78-297220b0cbf2"},{"id":"45289f11-87fb-4821-aeee-aefc8af7c18e"},{"id":"d5042ea7-aa18-48f3-a7da-fa9455978338"},{"id":"21bbeda5-fe54-4005-a297-32e96ad96667"},{"id":"3d49cef0-3faa-4f07-9eb4-20782f1bab7c"},{"id":"f09959f7-358b-4501-92d7-419828b79131"},{"id":"c0d23a6f-4635-4679-a4da-98248b2112fd"},{"id":"6b0ca5f4-bd2d-4ba3-a8ce-33ed65153cc9"},{"id":"d8280abb-c841-4578-9311-5f610adc6d3d"},{"id":"c8955490-ed25-4804-ae71-1aff82d1d3da"},{"id":"734647d2-d267-4654-b584-c01cf290e94d"},{"id":"31a39062-1d86-4fdb-a666-a36e8712277c"},{"id":"f5c626df-1cab-4d84-98e8-b1822a5b3f6d"},{"id":"24aa8607-efc9-4ee6-912a-e8998c4401cf"},{"id":"84bea048-1e4f-4d42-a9b9-d9d1367a9fc7"},{"id":"ccf1804b-cbd5-41a1-a77e-cad35e0870eb"},{"id":"b8339676-8cf4-4b01-b6b5-66231afe6864"},{"id":"b7457cf3-43c5-40b8-951c-1fc33e590a03"},{"id":"0103aa8b-2939-4208-ad61-86c9c9921985"},{"id":"654ed5f7-ebe1-4964-8add-26ee8ea881c6"},{"id":"bb895071-b38d-416b-820b-acb36dcde119"},{"id":"5756cc8d-f0b4-4a61-8db5-29eb0c4b93c4"},{"id":"149691c6-fc5e-497f-a5ec-5753a6af8f74"},{"id":"4f1a5894-2ea3-4111-b696-d02ced5b724b"},{"id":"d7c9a845-b937-4242-8fcc-a1a804138701"},{"id":"66e3c718-8961-4c71-9729-3e61a4b1d07a"},{"id":"2797f542-7b23-4f13-af2e-039115628beb"},{"id":"f6be8339-9117-4ad6-b3dc-7b610bb2b932"}]}]}