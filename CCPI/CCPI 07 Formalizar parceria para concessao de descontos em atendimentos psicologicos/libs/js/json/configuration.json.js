Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[CCPI] 07 Formalizar parceria para concessão de descontos em atendimentos psicológicos","publishDate":"08/09/2021 11:22:21","pages":[{"id":"cbb8c91c-d124-4aa1-8433-4d3bab654345","name":"[CCPI] 07 Formalizar parceria para concessão de desconto em atendimentos psicológicos","version":"1.0","author":"lucianis","image":"files\\diagrams\\CCPI]_07_Formalizar_parceria_para_concessao_de_desconto_em_atendimentos_psicologicos.png","isSubprocessPage":false,"properties":[],"elements":[{"id":"3089db24-a787-468b-9862-c6788884f4e0","name":"[CCPI] 07 Formalizar parceria para concessão de desconto em atendimentos psicológicos","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1905.8999,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"c6dc8359-3217-450d-9f41-0b510f01432f","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":102.0,"y":76.0}],"radius":15.5,"height":31.0,"width":31.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"1def1d5a-718e-4806-9a1e-227fbbfb251f","name":"Abrir processo de  inscrição em chamamento público para concessão de descontos em serviços de psicologia","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":170.0,"y":55.5}],"radius":0.0,"height":72.0,"width":163.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e88e6a53-0039-476a-83a2-4ed84834c05e","name":"Incluir em PDF os documentos necessários","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":202.5,"y":185.0}],"radius":0.0,"height":65.0,"width":98.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5f3f149a-228d-4084-aa78-e65569b48108","name":"Analisar adequação da peça processual","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":194.999985,"y":1341.8}],"radius":0.0,"height":60.0,"width":113.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e0614130-21c6-40aa-b3d8-43fa9ad337d2","name":"Incluir documento  872 - Despacho  Simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":380.0,"y":1345.3}],"radius":0.0,"height":53.0,"width":109.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9f4d89ea-a180-4541-9447-572d59b88a71","name":"Não","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":575.0,"y":1351.8}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Encaminhar apontamentos de ajustes","elementType":"SequenceFlow","properties":[]}]},{"id":"26e9185a-bb64-406f-962a-1af925a9f2ca","name":"Encaminhar apontamentos de ajustes","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":550.0,"y":1244.8}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7beba51f-ecb0-427a-be3a-2124baa4fcd4","name":"Realizar adequações","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":550.0,"y":197.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a3498803-c068-4afc-bcd4-4309364c352c","name":"Incluir documento 191 - Parecer","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":665.0,"y":1043.20007}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"27684209-296e-4530-9e50-5653e2590da0","name":"Incluir documento 036- Análise e Deliberação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":725.5,"y":1293.0}],"radius":0.0,"height":66.0,"width":93.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"de2ad5b6-b576-4c98-ac0f-0a5648d4638a","name":"Incluir documento  056 - Parecer procuradoria","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":712.5,"y":1689.6001}],"radius":0.0,"height":67.0,"width":119.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8df49ba2-f2d4-4c99-a362-c6283f2cc016","name":"Analisar o parecer","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1287.0,"y":1533.8}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"96e7b762-69ee-44d6-b404-4443ccd02b18","name":"Situação do parecer?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1312.0,"y":1433.4}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Aprovado sem necessidade de correções","elementType":"SequenceFlow","properties":[]},{"name":"Aprovado com necessidade de correções","elementType":"SequenceFlow","properties":[]},{"name":"Reprovado","elementType":"SequenceFlow","properties":[]}]},{"id":"a2826b7e-e27c-4cb3-9539-8550ed8ebec3","name":"Incluir documento 877 - Nota Técnica","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1140.0,"y":1228.4}],"radius":0.0,"height":60.0,"width":117.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"18fd85b4-5cd3-4d18-8624-4a90392ee77b","name":"Realizar adequações ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":973.0,"y":1091.20007}],"radius":0.0,"height":62.0,"width":136.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3fad97f6-dacd-41f6-a97a-020b874493d2","name":"Verificar adequações","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":890.0,"y":1222.8}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e197eb80-2b45-4973-b352-382496dd8954","name":"Gateway exclusivo","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":915.0,"y":1354.8}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"d7d7a442-2eb7-497a-941e-44410674b086","name":"Incluir documento 872 - Despacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":888.0,"y":1442.8}],"radius":0.0,"height":66.0,"width":94.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"906856a4-4ae5-40d7-863f-52526ca85210","name":"Incluir documento 872 - Depacho simples","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1274.0,"y":1231.4}],"radius":0.0,"height":60.0,"width":116.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"df0992f2-c0a1-40f4-aade-8eb73ecab68e","name":" Incluir documento 137 - Acordo de cooperação técnica","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":819.0,"y":492.0}],"radius":0.0,"height":57.0,"width":125.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"48e51dbe-4e87-4a61-af73-c08eafb9f43c","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":969.0,"y":413.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"03e16540-6ffd-479b-9502-ff2c51284015","name":"Assinar o acordo em bloco","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":1149.0,"y":645.300049}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"08b2010c-5c3c-441c-8f9b-7cb2193ae197","name":"Assinar o acordo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1050.0,"y":181.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2e990e11-b970-4ed0-a7f7-c6aa4ea62a81","name":"Gateway paralelo","elementImage":"files\\bpmnElements\\ParallelGateway.png","imageBounds":{"points":[{"x":1229.0,"y":408.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ParallelGateway","properties":[],"pageElements":[]},{"id":"65c30920-7323-4280-a7e8-053c2f195b8b","name":"Incluir documento 852 - Portaria ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1434.0,"y":882.0}],"radius":0.0,"height":50.0,"width":110.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"50bc97a9-e8b5-461d-8e25-555e42f9ea53","name":"Atualizar controles internos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1445.0,"y":351.5}],"radius":0.0,"height":56.0,"width":88.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"250c6f5a-bf9c-42d6-8070-eb42aa5f049d","name":"Publicar extrato de acordo no DOU","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1572.0,"y":349.5}],"radius":0.0,"height":60.0,"width":113.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"bc79dd36-83e2-4730-bf39-a91bc527144a","name":"Incluir em PDF  comprovante de publicação no DOU","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1724.0,"y":348.0}],"radius":0.0,"height":63.0,"width":98.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d277f106-4bc7-408b-b02a-749c73df807c","name":"Incluir documento 191  - Parecer","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1422.0,"y":1423.4}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"33500575-f87f-41d3-8188-b89628d17319","name":"Dar ciênica ao processo","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1422.0,"y":1102.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"cee502d8-0adf-4796-8813-d8c2cc73dec8","name":"Solicitar ciência do interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1542.0,"y":1044.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a48ce82a-4b44-4dde-8eba-b1f2073dc950","name":"Incluir ciência do interessado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1672.7,"y":1044.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"bcdd3c8c-5bda-49d2-b9ef-1e11be97b3fc","name":"[DIARQ] 01 Realizar  tratamento arquivístico","description":"","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1690.1,"y":1793.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[],"presentationAction":{"value":"https://wwwnqiportai.github.io/DIARQ/DIARQ%2001%20Realizar%20tratamento%20arquivistico/#list","type":"url"}},{"id":"16816f60-5b4d-4e54-8d06-79ebe4263f46","name":"Nenhum final","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">SA&Iacute;DAS:</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">1. Arquivamento devido a inconsist&ecirc;ncias apontadas pela PFUFCSPA</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">2. Acordo formalizado</span></p>","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1820.0,"y":1808.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"53c369e4-4bb8-4c5b-a699-3551ed23d401","name":"Interessado","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":291.7,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"82a1291e-dee9-420b-ae30-b94f877c1145","name":"CCPI","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":311.7}],"radius":0.0,"height":270.6,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"1a7c9396-94aa-40c1-8207-ceb0db6d75e1","name":"PROPLAN","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":582.300049}],"radius":0.0,"height":235.9,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"de13ba21-a184-47d6-a19f-c67562343d87","name":"PROGESP","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":818.2001}],"radius":0.0,"height":393.6,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"a01d85d8-b1cc-425a-84fc-b1edcdd8ca27","name":"ASSESP","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1211.8}],"radius":0.0,"height":409.2,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"82bf7a1d-f8bd-4471-9d98-85a5351b1059","name":"PFUFCSPA","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1621.0}],"radius":0.0,"height":156.8,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"83466cb1-3f5f-49c9-899e-3a114d8adc53","name":"DIARQ","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1777.8}],"radius":0.0,"height":148.099854,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"cbb8c91c-d124-4aa1-8433-4d3bab654345","containerName":"[CCPI] 07 Formalizar parceria para concessão de desconto em atendimentos psicológicos","isSubprocess":false,"elements":[{"id":"3089db24-a787-468b-9862-c6788884f4e0","value":"[CCPI] 07 Formalizar parceria para concessão de desconto em atendimentos psicológicos"},{"id":"53c369e4-4bb8-4c5b-a699-3551ed23d401","value":"Interessado"},{"id":"82a1291e-dee9-420b-ae30-b94f877c1145","value":"CCPI"},{"id":"1a7c9396-94aa-40c1-8207-ceb0db6d75e1","value":"PROPLAN"},{"id":"de13ba21-a184-47d6-a19f-c67562343d87","value":"PROGESP"},{"id":"a01d85d8-b1cc-425a-84fc-b1edcdd8ca27","value":"ASSESP"},{"id":"82bf7a1d-f8bd-4471-9d98-85a5351b1059","value":"PFUFCSPA"},{"id":"83466cb1-3f5f-49c9-899e-3a114d8adc53","value":"DIARQ"},{"id":"c6dc8359-3217-450d-9f41-0b510f01432f","value":""},{"id":"1def1d5a-718e-4806-9a1e-227fbbfb251f","value":"Abrir processo de  inscrição em chamamento público para concessão de descontos em serviços de psicologia"},{"id":"de2ad5b6-b576-4c98-ac0f-0a5648d4638a","value":"Incluir documento  056 - Parecer procuradoria"},{"id":"18fd85b4-5cd3-4d18-8624-4a90392ee77b","value":"Realizar adequações "},{"id":"65c30920-7323-4280-a7e8-053c2f195b8b","value":"Incluir documento 852 - Portaria "},{"id":"96e7b762-69ee-44d6-b404-4443ccd02b18","value":"Situação do parecer?"},{"id":"d277f106-4bc7-408b-b02a-749c73df807c","value":"Incluir documento 191  - Parecer"},{"id":"9f4d89ea-a180-4541-9447-572d59b88a71","value":"Não"},{"id":"5f3f149a-228d-4084-aa78-e65569b48108","value":"Analisar adequação da peça processual"},{"id":"e0614130-21c6-40aa-b3d8-43fa9ad337d2","value":"Incluir documento  872 - Despacho  Simples"},{"id":"a2826b7e-e27c-4cb3-9539-8550ed8ebec3","value":"Incluir documento 877 - Nota Técnica"},{"id":"906856a4-4ae5-40d7-863f-52526ca85210","value":"Incluir documento 872 - Depacho simples"},{"id":"16816f60-5b4d-4e54-8d06-79ebe4263f46","value":""},{"id":"33500575-f87f-41d3-8188-b89628d17319","value":"Dar ciênica ao processo"},{"id":"26e9185a-bb64-406f-962a-1af925a9f2ca","value":"Encaminhar apontamentos de ajustes"},{"id":"df0992f2-c0a1-40f4-aade-8eb73ecab68e","value":" Incluir documento 137 - Acordo de cooperação técnica"},{"id":"3fad97f6-dacd-41f6-a97a-020b874493d2","value":"Verificar adequações"},{"id":"08b2010c-5c3c-441c-8f9b-7cb2193ae197","value":"Assinar o acordo"},{"id":"03e16540-6ffd-479b-9502-ff2c51284015","value":"Assinar o acordo em bloco"},{"id":"50bc97a9-e8b5-461d-8e25-555e42f9ea53","value":"Atualizar controles internos"},{"id":"250c6f5a-bf9c-42d6-8070-eb42aa5f049d","value":"Publicar extrato de acordo no DOU"},{"id":"bc79dd36-83e2-4730-bf39-a91bc527144a","value":"Incluir em PDF  comprovante de publicação no DOU"},{"id":"e197eb80-2b45-4973-b352-382496dd8954","value":""},{"id":"d7d7a442-2eb7-497a-941e-44410674b086","value":"Incluir documento 872 - Despacho simples"},{"id":"8df49ba2-f2d4-4c99-a362-c6283f2cc016","value":"Analisar o parecer"},{"id":"7beba51f-ecb0-427a-be3a-2124baa4fcd4","value":"Realizar adequações"},{"id":"a3498803-c068-4afc-bcd4-4309364c352c","value":"Incluir documento 191 - Parecer"},{"id":"48e51dbe-4e87-4a61-af73-c08eafb9f43c","value":""},{"id":"2e990e11-b970-4ed0-a7f7-c6aa4ea62a81","value":""},{"id":"cee502d8-0adf-4796-8813-d8c2cc73dec8","value":"Solicitar ciência do interessado"},{"id":"a48ce82a-4b44-4dde-8eba-b1f2073dc950","value":"Incluir ciência do interessado"},{"id":"27684209-296e-4530-9e50-5653e2590da0","value":"Incluir documento 036- Análise e Deliberação"},{"id":"bcdd3c8c-5bda-49d2-b9ef-1e11be97b3fc","value":"[DIARQ] 01 Realizar  tratamento arquivístico"},{"id":"e88e6a53-0039-476a-83a2-4ed84834c05e","value":"Incluir em PDF os documentos necessários"},{"id":"e1f2c8e8-5187-43d5-9f8f-166ec391c726"},{"id":"2e05fb1d-e267-4d21-b550-1ba05d1bf1db"},{"id":"0023c64e-3839-46ff-89d6-c0d2362465b8"},{"id":"d9443dd6-0332-42f2-a48a-d4093e25c28c"},{"id":"6572235e-810b-4870-9577-6b47c8c8820a"},{"id":"9d2e3e54-7390-43ae-8220-a73465d442b5"},{"id":"23f33eff-688d-433d-adb3-d55f550be435"},{"id":"dc028cf2-3e99-4f16-8ddc-fd7ccf5583ca"},{"id":"8ea0416c-9702-4997-af83-5c4d3e24d128"},{"id":"5e3041e5-e19a-4f0c-909d-21064c863ed4"},{"id":"54aa5df9-f9a2-4988-9de9-9d6c22a7a88a"},{"id":"d9108c92-254d-40ba-b90b-e5f0f920d422"},{"id":"29add2ae-cad0-4942-9040-36edf6b7b952"},{"id":"9b149b35-84b8-44fc-a021-7bab904934b5"},{"id":"c8738fdd-d3e3-40d0-ac9a-c100de5a9d36"},{"id":"dc536f7c-b34b-4c85-8b42-8728f785b341"}]}]}