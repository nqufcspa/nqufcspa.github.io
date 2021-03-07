Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DCC] 05 Adquirir materiais de consumo por dispensa de licitação","publishDate":"07/03/2021 19:25:37","pages":[{"id":"36d95fc5-07fa-4d48-9c07-f7d2694da6ca","name":"[DCC] 05 Adquirir materiais de consumo por dispensa de licitação","version":"1.0","author":"michelo","image":"files\\diagrams\\DCC]_05_Adquirir_materiais_de_consumo_por_dispensa_de_licitacao.png","isSubprocessPage":false,"elements":[{"id":"313d887f-b256-43a6-ad97-ee64586cf88f","name":"[DCC] 05 Adquirir materiais de consumo por dispensa de licitação","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":2664.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"f0d5689c-37c4-49a7-8f12-9a8ff79264c9","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":152.0,"y":64.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"2f736a9a-eba3-431c-9475-17169749ac96","name":"Abrir processo de aquisição de material de consumo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":208.0,"y":43.0}],"radius":0.0,"height":73.0,"width":121.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"04459a98-ffb7-484e-9403-307de66e4921","name":"Incluir em PDF requisições de compra recebidas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":380.5,"y":43.5}],"radius":0.0,"height":72.0,"width":120.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b2fceaa8-e46b-4558-965a-40fba3c7957a","name":"Incluir em PDF orçamentos dos requisitantes ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":383.0,"y":166.0}],"radius":0.0,"height":60.0,"width":115.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"348c8267-0c31-4bbe-a35d-21da99a0d9a3","name":"Incluir documento 104 - Termo de referência","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":388.5,"y":284.5}],"radius":0.0,"height":65.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"39ffefd6-c759-4767-ad0e-86c4985cd5d4","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":555.0,"y":297.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"b62e5df0-608c-44ab-a102-841fb0a2363b","name":"Incluir Documento 108 - Minuta de contrato","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":520.5,"y":493.0}],"radius":0.0,"height":75.0,"width":109.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"60c0d1e9-a67d-4ce1-8b2c-5af0b90c0565","name":"Incluir documento 830 - Classificação contábil","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":522.0,"y":708.0}],"radius":0.0,"height":62.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d22e3a45-e93b-49c3-bf35-354f05f118a8","name":"Incluir  documento 836- Disponibilidade orçamentária","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":186.0,"y":853.0}],"radius":0.0,"height":68.0,"width":119.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"95d4b0fb-c82a-4b3f-b0e2-4fea9f18a096","name":"Realizar consulta de preços de mercado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":194.0,"y":1290.0}],"radius":0.0,"height":63.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d5ec6d9c-46ad-4a3e-8d01-9f139f65ad91","name":"Incluir em PDF propostas comerciais  ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":194.0,"y":1383.0}],"radius":0.0,"height":65.0,"width":103.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d5e8c914-c350-48bb-9d89-f4cbfa175a80","name":"Fornecedor possui regularidade?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":225.0,"y":1494.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"47cb3499-26a5-4910-9854-46b1ba7603b3","name":"Incluir documento 133- Notificação fornecedores","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":367.5,"y":1482.0}],"radius":0.0,"height":64.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8776520e-08de-4b70-865d-62417889e7fb","name":"Enviar notificação ao fornecedor","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":371.0,"y":1382.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fcfd6ac0-89ff-47a0-b0e8-0958f3079295","name":"Aguardando regularização do fornecedor","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":402.0,"y":1611.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"eb35ab95-3121-4bba-8099-01037adae3f2","name":"Incluir em PDF comprovantes de regularidade e de habilitação ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":192.0,"y":1586.0}],"radius":0.0,"height":80.0,"width":106.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"081dffdb-630d-40c6-88e9-498e8e52818c","name":"Incluir documento 107 - \tPlanilha estimativa de preços","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":186.0,"y":1714.0}],"radius":0.0,"height":60.0,"width":118.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b31b1892-43f3-47dd-b023-5fe8bf52f2dd","name":"Foram obtidas pelo menos três propostas?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":225.0,"y":1811.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"3ae474b1-e3f4-4276-8924-65035c8554e5","name":"Incluir documento 106 - \tAutorização para compra menos de 3 propostas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":191.5,"y":1901.0}],"radius":0.0,"height":79.0,"width":109.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a3ddc605-f3bc-43b5-bbd1-b1b0b933ef5f","name":"Incluir documento 036 - Análise e deliberação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":193.0,"y":2112.0}],"radius":0.0,"height":67.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8b87f753-2a87-4aea-bc6e-a5bfce145d2d","name":"Incluir em PDF comprovante de divulgação no Comprasnet","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":483.0,"y":1795.0}],"radius":0.0,"height":72.0,"width":95.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a251e405-3e16-4289-98b0-344538b460b4","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":617.0,"y":1448.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"1d407636-510c-4310-ae52-d89367e9dab0","name":"Informar DCC itens não adquiridos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":774.0,"y":1438.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9971b485-22c3-4dd2-a5fa-b06fa0cafdc0","name":"Prosseguir com a contratação?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":799.0,"y":1335.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"628824ec-55b7-4464-b06b-215e3c4f4303","name":"Incluir documento   986 - Nota de empenho","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":764.0,"y":895.5}],"radius":0.0,"height":63.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2491a9e5-ecdb-4514-9a64-670488a08731","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":996.571533,"y":906.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"af80efe0-b5d9-4fa4-b386-13b1fbbcff6b","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1001.57153,"y":678.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"6e507157-d4ea-4f79-a330-ae2ac9ebf0d0","name":"Assinar documento em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1001.57153,"y":2113.066}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"840d8009-bb5d-47aa-91f0-790e5e78378e","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":1116.0,"y":906.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"00b719dc-c29a-458a-997d-a506c436c0e1","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1244.0,"y":906.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"86c802e3-675a-4c67-a2c5-24c3de06112c","name":"Enviar empenho aos fornecedores","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1422.0,"y":896.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"06a816f6-dd39-4102-ae01-3d888e5e45c9","name":"Incluir em PDF comprovantes de recebimento dos empenhos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1404.0,"y":994.0}],"radius":0.0,"height":71.0,"width":126.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a60c470d-cd9b-486d-a9a7-4c5bf2561ac8","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1415.0,"y":1094.0}],"radius":0.0,"height":69.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6fc3ee74-19bd-4a59-ad6e-7d73a5583438","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1213.0,"y":801.0}],"radius":0.0,"height":66.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e1176146-98e8-4b1b-b43e-72ccc9d150d2","name":"[DCC] 07 Formalizar contrato para aquisição de materiais de consumo","description":"","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":1219.0,"y":493.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SubProcess","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DCC/DCC%2007%20Formalizar%20contrato%20para%20aquisi%C3%A7%C3%A3o%20de%20materiais%20de%20consumo/#list","type":"url"}},{"id":"4cfea503-e1d0-45ad-9cbf-3956b6138f48","name":"[DSG] 19 Receber materiais de consumo  ","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1422.5,"y":2289.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DSG/DSG%2019%20Receber%20materiais%20de%20consumo/#list","type":"url"}},{"id":"a14cfa52-a295-450f-a27b-df537f0f86b1","name":"Anexar processos de recebimento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1422.5,"y":2388.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"03e7e243-24ae-42ff-ac1d-87d19536acdf","name":"Realizar tratamento arquivístico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1585.0,"y":2522.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1f0d4fcf-3bc7-46fc-96a5-67d8aad21079","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1615.0,"y":2625.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"c72c42ec-a593-49bc-bbef-b97184e4e0c7","name":"DCC","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":400.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"0a6ec7c6-9bd1-4607-a6f2-c646986da959","name":"DICONT","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":420.0}],"radius":0.0,"height":199.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"521a043a-2647-4b17-b627-4c3554e271e4","name":"DCF","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":619.0}],"radius":0.0,"height":161.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"68400e85-7f17-45e5-bf2b-fe7b4f738f94","name":"DEO","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":780.0}],"radius":0.0,"height":488.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"6c52dab4-e24d-4e95-be72-59336259ce5f","name":"DICOMP","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1268.0}],"radius":0.0,"height":795.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"1625ead1-ffb6-45c9-a415-de3dff6a23e5","name":"PROAD","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":2063.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"7534bd43-df79-4df0-bcad-13cfdf253203","name":"DIALMOX","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":2263.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"545bd41f-46c9-41e4-aebb-224f76d5cf14","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":2463.0}],"radius":0.0,"height":221.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"36d95fc5-07fa-4d48-9c07-f7d2694da6ca","containerName":"[DCC] 05 Adquirir materiais de consumo por dispensa de licitação","isSubprocess":false,"elements":[{"id":"313d887f-b256-43a6-ad97-ee64586cf88f","value":"[DCC] 05 Adquirir materiais de consumo por dispensa de licitação"},{"id":"c72c42ec-a593-49bc-bbef-b97184e4e0c7","value":"DCC"},{"id":"0a6ec7c6-9bd1-4607-a6f2-c646986da959","value":"DICONT"},{"id":"521a043a-2647-4b17-b627-4c3554e271e4","value":"DCF"},{"id":"68400e85-7f17-45e5-bf2b-fe7b4f738f94","value":"DEO"},{"id":"6c52dab4-e24d-4e95-be72-59336259ce5f","value":"DICOMP"},{"id":"1625ead1-ffb6-45c9-a415-de3dff6a23e5","value":"PROAD"},{"id":"7534bd43-df79-4df0-bcad-13cfdf253203","value":"DIALMOX"},{"id":"545bd41f-46c9-41e4-aebb-224f76d5cf14","value":"DIARQ"},{"id":"2f736a9a-eba3-431c-9475-17169749ac96","value":"Abrir processo de aquisição de material de consumo"},{"id":"04459a98-ffb7-484e-9403-307de66e4921","value":"Incluir em PDF requisições de compra recebidas"},{"id":"b2fceaa8-e46b-4558-965a-40fba3c7957a","value":"Incluir em PDF orçamentos dos requisitantes "},{"id":"348c8267-0c31-4bbe-a35d-21da99a0d9a3","value":"Incluir documento 104 - Termo de referência"},{"id":"95d4b0fb-c82a-4b3f-b0e2-4fea9f18a096","value":"Realizar consulta de preços de mercado"},{"id":"081dffdb-630d-40c6-88e9-498e8e52818c","value":"Incluir documento 107 - \tPlanilha estimativa de preços"},{"id":"8b87f753-2a87-4aea-bc6e-a5bfce145d2d","value":"Incluir em PDF comprovante de divulgação no Comprasnet"},{"id":"628824ec-55b7-4464-b06b-215e3c4f4303","value":"Incluir documento   986 - Nota de empenho"},{"id":"2491a9e5-ecdb-4514-9a64-670488a08731","value":""},{"id":"af80efe0-b5d9-4fa4-b386-13b1fbbcff6b","value":"Assinar documento em bloco"},{"id":"6e507157-d4ea-4f79-a330-ae2ac9ebf0d0","value":"Assinar documento em bloco"},{"id":"a60c470d-cd9b-486d-a9a7-4c5bf2561ac8","value":"Incluir documento 872 - Despacho simples"},{"id":"60c0d1e9-a67d-4ce1-8b2c-5af0b90c0565","value":"Incluir documento 830 - Classificação contábil"},{"id":"d22e3a45-e93b-49c3-bf35-354f05f118a8","value":"Incluir  documento 836- Disponibilidade orçamentária"},{"id":"a251e405-3e16-4289-98b0-344538b460b4","value":""},{"id":"1d407636-510c-4310-ae52-d89367e9dab0","value":"Informar DCC itens não adquiridos"},{"id":"06a816f6-dd39-4102-ae01-3d888e5e45c9","value":"Incluir em PDF comprovantes de recebimento dos empenhos"},{"id":"39ffefd6-c759-4767-ad0e-86c4985cd5d4","value":""},{"id":"d5ec6d9c-46ad-4a3e-8d01-9f139f65ad91","value":"Incluir em PDF propostas comerciais  "},{"id":"00b719dc-c29a-458a-997d-a506c436c0e1","value":""},{"id":"b62e5df0-608c-44ab-a102-841fb0a2363b","value":"Incluir Documento 108 - Minuta de contrato"},{"id":"6fc3ee74-19bd-4a59-ad6e-7d73a5583438","value":"Incluir documento 872 - Despacho simples"},{"id":"86c802e3-675a-4c67-a2c5-24c3de06112c","value":"Enviar empenho aos fornecedores"},{"id":"4cfea503-e1d0-45ad-9cbf-3956b6138f48","value":"[DSG] 19 Receber materiais de consumo  "},{"id":"840d8009-bb5d-47aa-91f0-790e5e78378e","value":""},{"id":"f0d5689c-37c4-49a7-8f12-9a8ff79264c9","value":""},{"id":"b31b1892-43f3-47dd-b023-5fe8bf52f2dd","value":"Foram obtidas pelo menos três propostas?"},{"id":"3ae474b1-e3f4-4276-8924-65035c8554e5","value":"Incluir documento 106 - \tAutorização para compra menos de 3 propostas"},{"id":"a3ddc605-f3bc-43b5-bbd1-b1b0b933ef5f","value":"Incluir documento 036 - Análise e deliberação"},{"id":"03e7e243-24ae-42ff-ac1d-87d19536acdf","value":"Realizar tratamento arquivístico"},{"id":"1f0d4fcf-3bc7-46fc-96a5-67d8aad21079","value":""},{"id":"a14cfa52-a295-450f-a27b-df537f0f86b1","value":"Anexar processos de recebimento"},{"id":"d5e8c914-c350-48bb-9d89-f4cbfa175a80","value":"Fornecedor possui regularidade?"},{"id":"eb35ab95-3121-4bba-8099-01037adae3f2","value":"Incluir em PDF comprovantes de regularidade e de habilitação "},{"id":"47cb3499-26a5-4910-9854-46b1ba7603b3","value":"Incluir documento 133- Notificação fornecedores"},{"id":"e1176146-98e8-4b1b-b43e-72ccc9d150d2","value":"[DCC] 07 Formalizar contrato para aquisição de materiais de consumo"},{"id":"fcfd6ac0-89ff-47a0-b0e8-0958f3079295","value":"Aguardando regularização do fornecedor"},{"id":"9971b485-22c3-4dd2-a5fa-b06fa0cafdc0","value":"Prosseguir com a contratação?"},{"id":"8776520e-08de-4b70-865d-62417889e7fb","value":"Enviar notificação ao fornecedor"},{"id":"f79c597a-521e-458f-91cb-449d24b0219f"},{"id":"2c5a6a81-df5c-40fe-aa26-036eaac05d5a"},{"id":"eb28eb97-9fcc-4610-9496-80e0f9a67103"},{"id":"9b78c5c1-2bd1-494d-a116-e05317df1d59"},{"id":"2d6555e3-d706-4f7f-9c08-1da2ac0aabda"},{"id":"6ee69f4f-ffca-41fe-9ece-d94725551230"},{"id":"cacbd976-9525-4435-b677-40880503fe35"},{"id":"4f2d68d3-3e44-4128-bd96-a0000c796ad8"},{"id":"e05e5974-84ea-403c-909c-080d31871d48"},{"id":"afd1549a-05db-4833-9846-9d4b69b00902"},{"id":"de9976e5-03fa-4acc-8921-25587d3961a5"},{"id":"44080f69-67a5-45a2-9725-93707acf821e"},{"id":"974ea493-4b96-49d6-9d29-56e4b02ae1ae"},{"id":"07bf4adf-082b-4dca-97df-9cae97c046e6"},{"id":"87e11fc6-7c5e-4e59-838a-a5846eddefab"},{"id":"f86fa5b5-9ae5-4f8e-9bf5-36a5b79cd95c"},{"id":"08b0386f-0d7a-4801-9108-81ae2e6b3441"},{"id":"9ab446de-df20-4e3f-8652-c6eaa1c2bae6"},{"id":"5ad9513b-7f1d-4817-9f61-809a6891a0a7"}]}]}