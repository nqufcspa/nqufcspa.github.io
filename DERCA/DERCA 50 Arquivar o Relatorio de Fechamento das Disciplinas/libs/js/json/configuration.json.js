Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"[DERCA] 50 Arquivar o Relatório de Fechamento das Disciplinas","publishDate":"26/08/2021 19:36:16","pages":[{"id":"86e92c13-56f2-4e8d-bdb9-b5b8c02967d5","name":"[DERCA] 50 Arquivar o Relatório de Fechamento das Disciplinas","version":"1.0","author":"joaomonteiro","image":"files\\diagrams\\DERCA]_50_Arquivar_o_Relatorio_de_Fechamento_das_Disciplinas.png","isSubprocessPage":false,"elements":[{"id":"59d1f2b9-c614-43ec-931c-59648f7a6f55","name":"[DERCA] 50 Arquivar o Relatório de Fechamento das Disciplinas","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":1358.2,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"7da0421f-d0e5-4db0-8c8e-6bff2e8ea873","name":"Nenhum início","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":183.0,"y":161.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"e210c5d1-2b69-4029-ad52-989db0a19617","name":"Lançar registros relativos à disciplina pelo Portal do Professor","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":281.0,"y":146.0}],"radius":0.0,"height":60.0,"width":197.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8dd53cab-5ff4-43cc-b563-d54cab696d80","name":"Elaborar o Relatório de Fechamento das Disciplinas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":573.0,"y":146.0}],"radius":0.0,"height":60.0,"width":131.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"39cfa6ac-5817-4f70-9703-75474cc2eeb2","name":"Elaborar e-mail de envio dos documentos de Fechamento das Disciplinas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":561.0,"y":310.0}],"radius":0.0,"height":70.0,"width":152.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"24f03f0c-ed3b-4d3a-a3df-86566a937b43","name":"Houve Exame?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":616.0,"y":501.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"032ee4df-fa51-4ca9-a54c-695e814b3283","name":"Anexar Ata de Exame e o instrumento de exame ou descrição da atividade proposta","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":793.0,"y":483.0}],"radius":0.0,"height":75.0,"width":196.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"30d02d2d-9cf2-4f2b-847c-f39fb1c69acb","name":"Anexar Relatório de Fechamento das Disciplinas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":559.0,"y":605.0}],"radius":0.0,"height":60.0,"width":154.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"db077444-9c37-4b46-a483-50ebe102ce4e","name":"Enviar documentos relativos ao Fechamento das Disciplinas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":565.0,"y":796.0}],"radius":0.0,"height":60.0,"width":142.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0e98b250-6d87-4857-858a-78215157a33b","name":"Verificar documentos recebidos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":595.0,"y":1118.0}],"radius":0.0,"height":60.0,"width":130.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d4dd5fb8-c8c2-4abc-9e03-3346c3163a35","name":"Todos os requisitos da documentação relativos ao fechamento das disciplinas conferem?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":867.0,"y":1128.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"93bb40a7-a112-4137-a9e1-f1ce203c3f77","name":"Enviar e-mail ao Docente informando falhas na documentação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1045.0,"y":939.0}],"radius":0.0,"height":81.0,"width":168.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"f06c2144-41d8-41fd-b40c-e368eac9f9e3","name":"Aguardar retorno do Docente","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":872.0,"y":964.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"b16b691d-5cc5-42c9-a277-7737cde5d35d","name":"Arquivar os documentos na Divisão de Secretaria do DERCA","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":817.0,"y":1273.0}],"radius":0.0,"height":65.0,"width":141.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d9548af6-431b-4b9b-bb4d-feda3b92029c","name":"Nenhum final","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1059.0,"y":1291.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"cbca4955-a816-4b97-a9bb-7f84498db642","name":"Docente","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":879.2,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"f0ed8c34-5b3c-4022-94ab-3e8bbb24ca0c","name":"DISEC","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":899.2}],"radius":0.0,"height":479.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Autoridade","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"86e92c13-56f2-4e8d-bdb9-b5b8c02967d5","containerName":"[DERCA] 50 Arquivar o Relatório de Fechamento das Disciplinas","isSubprocess":false,"elements":[{"id":"59d1f2b9-c614-43ec-931c-59648f7a6f55","value":"[DERCA] 50 Arquivar o Relatório de Fechamento das Disciplinas"},{"id":"cbca4955-a816-4b97-a9bb-7f84498db642","value":"Docente"},{"id":"f0ed8c34-5b3c-4022-94ab-3e8bbb24ca0c","value":"DISEC"},{"id":"7da0421f-d0e5-4db0-8c8e-6bff2e8ea873","value":""},{"id":"93bb40a7-a112-4137-a9e1-f1ce203c3f77","value":"Enviar e-mail ao Docente informando falhas na documentação"},{"id":"b16b691d-5cc5-42c9-a277-7737cde5d35d","value":"Arquivar os documentos na Divisão de Secretaria do DERCA"},{"id":"d9548af6-431b-4b9b-bb4d-feda3b92029c","value":""},{"id":"d4dd5fb8-c8c2-4abc-9e03-3346c3163a35","value":"Todos os requisitos da documentação relativos ao fechamento das disciplinas conferem?"},{"id":"0e98b250-6d87-4857-858a-78215157a33b","value":"Verificar documentos recebidos"},{"id":"db077444-9c37-4b46-a483-50ebe102ce4e","value":"Enviar documentos relativos ao Fechamento das Disciplinas"},{"id":"8dd53cab-5ff4-43cc-b563-d54cab696d80","value":"Elaborar o Relatório de Fechamento das Disciplinas"},{"id":"24f03f0c-ed3b-4d3a-a3df-86566a937b43","value":"Houve Exame?"},{"id":"032ee4df-fa51-4ca9-a54c-695e814b3283","value":"Anexar Ata de Exame e o instrumento de exame ou descrição da atividade proposta"},{"id":"f06c2144-41d8-41fd-b40c-e368eac9f9e3","value":"Aguardar retorno do Docente"},{"id":"e210c5d1-2b69-4029-ad52-989db0a19617","value":"Lançar registros relativos à disciplina pelo Portal do Professor"},{"id":"30d02d2d-9cf2-4f2b-847c-f39fb1c69acb","value":"Anexar Relatório de Fechamento das Disciplinas"},{"id":"39cfa6ac-5817-4f70-9703-75474cc2eeb2","value":"Elaborar e-mail de envio dos documentos de Fechamento das Disciplinas"},{"id":"8ef5cc37-8c37-4998-b258-1d0ccdd8ee9c"},{"id":"62f39faa-5514-463c-bb36-a1348b760542"},{"id":"592fe58a-bcfa-43ea-a4c2-dbf1b9a497bc"},{"id":"a8386c12-9251-44d2-a9ad-c34857901b24"},{"id":"8d49096e-ef26-4408-aa76-c762916ac5a9"},{"id":"33b5826d-4221-47d3-aee9-dbb41150ca3e"},{"id":"f9857cc9-012c-4686-8d2b-9aa529737cd2"},{"id":"999c55eb-9b92-474a-8d02-ed5317b00f11"},{"id":"f3a13895-9200-481b-9217-37a9b92e6587"},{"id":"6f243285-1e71-4192-acf4-bf180dba3ae4"},{"id":"47842695-0a50-4f6b-8f8c-8f0e0580fc40"},{"id":"61d03ea1-8aab-425f-9c83-708262a43653"},{"id":"5765c0e3-ba8e-43ed-b990-1cdc6e104365"},{"id":"9a167a8f-01d8-43fb-8310-6aef8757b549"},{"id":"352e52ab-9531-4c53-b0e9-da8a8e8b31c2"},{"id":"9be513bd-e072-4dee-8e0b-8e4c599dcb42"},{"id":"c97ab887-4d7f-4b96-93e2-82f24d53b061"},{"id":"316c7f15-2839-41b7-a88b-cbdcd530e59f"},{"id":"f6acdc3a-19bc-40ad-9a09-28ab4eb84774"},{"id":"4ef5f43a-c6de-4e72-9639-1ea38071ea2d"},{"id":"b7cca79f-2e53-4d7f-abef-fd7d09ee8d60"},{"id":"dd5a40ef-17bf-4078-8ab0-5ab7fabe9af0"},{"id":"ce791e77-b296-450e-b19d-1e0a8be6fb7c"},{"id":"884c8b20-44b9-46ac-9529-aa12e498b05e"},{"id":"f753c87d-cf31-4ea3-9ac6-daeaadebf954"},{"id":"f75613ce-ca6c-404b-85ff-69f6b71d0245"}]}]}